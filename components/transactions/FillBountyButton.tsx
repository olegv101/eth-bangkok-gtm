import React, { useState } from 'react'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { isEthereumWallet } from '@dynamic-labs/ethereum'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { parseGwei } from 'viem'
import { bountyAddress, bountyABI } from '@/lib/contracts/Bounty'

export default function FillBountyButton({ bountyId }: { bountyId: number }) {
	const { primaryWallet, network } = useDynamicContext()
	const [tweetId, setTweetId] = useState<string | null>(null)
	const router = useRouter()

	const handleTransaction = async () => {
		if (!tweetId) {
			return
		}

		if (primaryWallet && isEthereumWallet(primaryWallet) && network) {
			const loading = toast.loading('Redeeming link...')
			const client = await primaryWallet.getWalletClient(network.toString())
			const match = tweetId.match(/status\/(\d+)/)
			const strippedTweetId = match ? match[1] : tweetId
			console.log(strippedTweetId)
			const redeemTx = await client.writeContract({
				address: bountyAddress[Number(network)],
				abi: bountyABI,
				functionName: 'fillBounty',
				args: [bountyId, strippedTweetId],
				gasPrice: Number(network) === 545 ? parseGwei('20') : undefined,
			})
			console.log(redeemTx)
			toast.dismiss(loading)
			toast.success('Token redeemed!')
			router.push('/')
		}
	}
	return (
		<div className='flex flex-col gap-4'>
			<input
				type='text'
				placeholder='Enter Tweet Link'
				className='w-full p-3 border rounded-lg bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
				onChange={(e) => setTweetId(e.target.value)}
				value={tweetId || ''}
			/>
			<Button
				onClick={handleTransaction}
				disabled={!tweetId}
				className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
			>
				Fill Bounty
			</Button>
		</div>
	)
}
