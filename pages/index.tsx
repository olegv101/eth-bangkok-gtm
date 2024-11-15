import BountyCard, { Bounty } from '@/components/bounty'
import { USDCIcon } from '@/components/icons/USDCIcon'
import Page from '@/components/page'
import Section from '@/components/section'
import { bountyAddress, bountyABI } from '@/lib/contracts/Bounty'
import { usdcContractAddress, usdcContractAbi } from '@/lib/contracts/USDC'
import { isEthereumWallet } from '@dynamic-labs/ethereum'
import {
	DynamicWidget,
	useDynamicContext,
	useIsLoggedIn,
} from '@dynamic-labs/sdk-react-core'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Address, encodeAbiParameters, keccak256, zeroAddress } from 'viem'

const Index = () => {
	const isLoggedIn = useIsLoggedIn()
	const { primaryWallet, network } = useDynamicContext()
	const [bounties, setBounties] = useState<Bounty[]>([])

	useEffect(() => {
		const fetchPasswords = async () => {
			if (primaryWallet && isEthereumWallet(primaryWallet) && network) {
				const client = await primaryWallet.getPublicClient()
				try {
					let creator_ens = await client.getEnsName({
						address: primaryWallet.address as Address,
					})
					toast.success(
						`Welcome to SmolSend ${creator_ens || (primaryWallet.address as Address)}!`,
					)
				} catch (error) {
					toast.success(
						`Welcome to SmolSend ${primaryWallet.address as Address}!`,
					)
				}
				const bountyIds = await client.readContract({
					address: bountyAddress[Number(network)],
					abi: bountyABI,
					functionName: 'getBounties',
				})
				setBounties(
					(bountyIds as Bounty[])
						.filter((bounty) => bounty.filledBy === zeroAddress)
						.map((bounty, index) => ({
							...bounty,
							bountyId: index,
						})),
				)
				console.log(bounties)
			}
		}
		fetchPasswords()
	}, [network])

	useEffect(() => {
		const fetchTokenBalance = async () => {
			if (primaryWallet && isEthereumWallet(primaryWallet) && network) {
				const client = await primaryWallet.getPublicClient()
				const balance = await client.readContract({
					address: usdcContractAddress[Number(network)],
					abi: usdcContractAbi,
					functionName: 'balanceOf',
					args: [primaryWallet.address as Address],
				})
				const name = await client.readContract({
					address: usdcContractAddress[Number(network)],
					abi: usdcContractAbi,
					functionName: 'name',
				})
			}
		}
		fetchTokenBalance()
	}, [primaryWallet, network])

	if (!isLoggedIn) {
		return (
			<Page>
				<Section>
					<div className='container mx-auto px-4 flex flex-col items-center justify-center min-h-screen'>
						<h1 className='text-5xl font-extrabold text-center mb-6 text-black shadow-text'>
							Get paid for your banger tweets
						</h1>
						<h2 className='text-2xl text-center mb-8 text-black shadow-text'>
							Pay high performing KOLs, not mediocre ones
						</h2>
						<div className='flex justify-center'>
							<DynamicWidget
								variant='modal'
								buttonClassName='bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-purple-100 transition duration-300 transform hover:scale-105'
							/>
						</div>
						<div className='mt-12'>
							<USDCIcon width={50} height={50} className='animate-bounce' />
						</div>
					</div>
				</Section>
			</Page>
		)
	}

	return (
		<Page>
			<Section>
				<div className='container mx-auto px-4 py-8'>
					<h1 className='text-3xl font-bold mb-4'>Available Bounties</h1>
					{bounties.map((bounty) => (
						<BountyCard key={bounty.tweetId} bounty={bounty} />
					))}
				</div>
			</Section>
		</Page>
	)
}

export default Index
