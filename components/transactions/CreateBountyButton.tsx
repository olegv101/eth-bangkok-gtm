import React from 'react'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { isEthereumWallet } from '@dynamic-labs/ethereum'
import { Address, encodeAbiParameters, keccak256, parseGwei } from 'viem'
import { Button } from '../ui/button'
import { usdcContractAbi, usdcContractAddress } from '@/lib/contracts/USDC'
import { bountyAddress, bountyABI } from '@/lib/contracts/Bounty'
import { toast } from 'sonner'

export default function CreateBountyButton({
	tokenAddress,
	tokenAmount,
	minViewCount,
	keyword,
	onCreated,
}: {
	tokenAddress: Address | null
	tokenAmount: number | null
	minViewCount: string | null
	keyword: string | null
	onCreated: () => void
}) {
	const { primaryWallet, network } = useDynamicContext()

	const handleTransaction = async () => {
		if (!minViewCount || !tokenAddress || !tokenAmount) {
			return
		}
		const loadingToastId = toast.loading('Creating link...')
		if (primaryWallet && isEthereumWallet(primaryWallet) && network) {
			const client = await primaryWallet.getWalletClient(network.toString())
			const publicClient = await primaryWallet.getPublicClient()
			const balance = await publicClient.readContract({
				address: usdcContractAddress[Number(network)],
				abi: usdcContractAbi,
				functionName: 'balanceOf',
				args: [primaryWallet.address as Address],
			})
			const approveAmount = await publicClient.readContract({
				address: tokenAddress,
				abi: usdcContractAbi,
				functionName: 'allowance',
				args: [
					primaryWallet.address as Address,
					bountyAddress[Number(network)],
				],
			})

			if (
				tokenAddress === usdcContractAddress[Number(network)] &&
				Number(balance) < tokenAmount
			) {
				const mintUSDCTx = await client.writeContract({
					address: usdcContractAddress[Number(network)],
					abi: usdcContractAbi,
					functionName: 'mint',
					args: [primaryWallet.address as Address, BigInt(tokenAmount)],
					gasPrice: Number(network) === 545 ? parseGwei('20') : undefined,
				})
				await publicClient.waitForTransactionReceipt({
					hash: mintUSDCTx,
				})
			}
			if (Number(approveAmount) < tokenAmount) {
				const approveTx = await client.writeContract({
					address: tokenAddress,
					abi: usdcContractAbi,
					functionName: 'approve',
					args: [bountyAddress[Number(network)], BigInt(tokenAmount)],
					gasPrice: Number(network) === 545 ? parseGwei('20') : undefined,
				})
				await publicClient.waitForTransactionReceipt({
					hash: approveTx,
				})
			}
			const createLinkTx = await client.writeContract({
				address: bountyAddress[Number(network)],
				abi: bountyABI,
				functionName: 'createBounty',
				args: [BigInt(tokenAmount), minViewCount, keyword, tokenAddress],
				gasPrice: Number(network) === 545 ? parseGwei('20') : undefined,
			})
			toast.dismiss(loadingToastId)
			toast.success('Bounty created!')
			onCreated()
		}
	}

	return (
		<div>
			<Button
				onClick={handleTransaction}
				disabled={!tokenAddress || !tokenAmount || !minViewCount}
			>
				Create Link
			</Button>
		</div>
	)
}
