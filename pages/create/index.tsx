import Page from '@/components/page'
import { useEffect, useState } from 'react'
import { Address } from 'viem'
import Section from '@/components/section'
import { Input } from '@/components/ui/input'
import { usdcContractAbi, usdcContractAddress } from '@/lib/contracts/USDC'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { isEthereumWallet } from '@dynamic-labs/ethereum'
import CreateBountyButton from '@/components/transactions/CreateBountyButton'

export default function Create() {
	const { primaryWallet, network } = useDynamicContext()
	const [tokenAddress, setTokenAddress] = useState<Address | null>(
		usdcContractAddress[Number(network)],
	)
	const [tokenName, setTokenName] = useState<string | null>(null)
	const [tokenAmount, setTokenAmount] = useState<number | null>(null)
	const [minViewCount, setMinViewCount] = useState<string | null>(null)
	const [keyword, setKeyword] = useState<string | null>(null)
	const [created, setCreated] = useState<boolean>(false)

	useEffect(() => {
		if (!network) return
		setTokenAddress(usdcContractAddress[Number(network)])
	}, [network])

	useEffect(() => {
		if (tokenAddress) {
			const fetchTokenName = async () => {
				if (!primaryWallet || !isEthereumWallet(primaryWallet)) return
				const publicClient = await primaryWallet.getPublicClient()
				const name = await publicClient.readContract({
					address: tokenAddress,
					abi: usdcContractAbi,
					functionName: 'name',
				})
				setTokenName(name)
			}
			fetchTokenName()
		}
	}, [tokenAddress])

	// if (created) {
	// 	return (
	// 		<Page>
	// 			<Card className='max-w-md mx-auto p-8 space-y-8'>
	// 				<div className='space-y-4'>
	// 					<h2 className='text-3xl font-bold text-center'>Share link</h2>
	// 					<p className='text-gray-600 text-center'>
	// 						Your assets are ready to claim. Send the link via text or email.
	// 						The token can be reclaimed in your transaction history.
	// 					</p>
	// 				</div>

	// 				<div className='flex flex-col items-center space-y-6'>
	// 					<div className='w-32 h-32'>
	// 						<QRCode value={shareUrl} size={128} />
	// 					</div>

	// 					<div className='w-full text-center'>
	// 						<p className='text-sm text-gray-500 mb-2 break-all'>{shareUrl}</p>
	// 						<Button
	// 							className='bg-black text-white px-6 py-3 rounded-full flex items-center justify-center w-full'
	// 							onClick={() => {
	// 								navigator.clipboard.writeText(shareUrl)
	// 								toast.success('Link copied to clipboard!')
	// 							}}
	// 						>
	// 							<svg
	// 								className='w-5 h-5 mr-2'
	// 								fill='currentColor'
	// 								viewBox='0 0 20 20'
	// 								xmlns='http://www.w3.org/2000/svg'
	// 							>
	// 								<path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
	// 							</svg>
	// 							SHARE LINK
	// 						</Button>
	// 					</div>
	// 				</div>

	// 				<div className='pt-4'>
	// 					<TokenDisplay
	// 						address={tokenAddress ?? '0x'}
	// 						amount={tokenAmount ?? 0}
	// 						name={tokenName ?? ''}
	// 					/>
	// 				</div>

	// 				<div className='flex justify-center space-x-4'>
	// 					<Button
	// 						variant='outline'
	// 						disabled={!password}
	// 						onClick={() => {
	// 							if (!password) return
	// 							setCreated(false)
	// 							handleRedeem(password)
	// 						}}
	// 					>
	// 						Undo Share
	// 					</Button>
	// 					<Button
	// 						variant='outline'
	// 						onClick={() => {
	// 							setCreated(false)
	// 							setPassword(null)
	// 							setTokenAddress(null)
	// 							setTokenAmount(null)
	// 							setTokenName(null)
	// 							window.location.reload()
	// 						}}
	// 					>
	// 						Create Another Link
	// 					</Button>
	// 				</div>
	// 			</Card>
	// 		</Page>
	// 	)
	// }

	return (
		<Page>
			<Section>
				<div className='container mx-auto px-8 py-12'>
					<h2 className='text-3xl font-bold text-custom-primary mb-8'>
						Create Bounty
					</h2>
					<div className='space-y-6 max-w-md mx-auto'>
						<Input
							placeholder='Token Address'
							type='text'
							value={tokenAddress ?? ''}
							onChange={(e) => setTokenAddress(e.target.value as Address)}
							className='w-full'
						/>
						<Input
							placeholder='Amount'
							type='number'
							value={tokenAmount ?? ''}
							onChange={(e) => setTokenAmount(Number(e.target.value))}
							className='w-full'
						/>
						<Input
							placeholder='Minimum View Count'
							type='text'
							value={minViewCount ?? ''}
							onChange={(e) => setMinViewCount(e.target.value)}
							className='w-full'
						/>
						<Input
							placeholder='Keyword'
							type='text'
							value={keyword ?? ''}
							onChange={(e) => setKeyword(e.target.value)}
							className='w-full'
						/>
						<div className='mt-8'>
							<CreateBountyButton
								tokenAddress={tokenAddress}
								tokenAmount={tokenAmount}
								minViewCount={minViewCount}
								keyword={keyword}
								onCreated={() => setCreated(true)}
							/>
						</div>
					</div>
				</div>
			</Section>
		</Page>
	)
}
