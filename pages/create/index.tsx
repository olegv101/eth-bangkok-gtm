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

	return (
		<Page>
			<Section>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-2xl'>
					<div className='bg-white shadow-sm rounded-lg p-8'>
						<h2 className='text-3xl font-bold text-custom-primary mb-8'>
							Create Bounty
						</h2>
						<div className='space-y-6'>
							<div className='space-y-2'>
								<label
									htmlFor='tokenAddress'
									className='block text-sm font-medium text-gray-700'
								>
									Token Address
								</label>
								<Input
									id='tokenAddress'
									placeholder='Enter token address (0x...)'
									type='text'
									value={tokenAddress ?? ''}
									onChange={(e) => setTokenAddress(e.target.value as Address)}
									className='w-full'
								/>
								{tokenName && (
									<p className='text-sm text-gray-500 mt-1'>
										Token: {tokenName}
									</p>
								)}
							</div>

							<div className='space-y-2'>
								<label
									htmlFor='amount'
									className='block text-sm font-medium text-gray-700'
								>
									Amount
								</label>
								<Input
									id='amount'
									placeholder='Enter token amount'
									type='number'
									value={tokenAmount ?? ''}
									onChange={(e) => setTokenAmount(Number(e.target.value))}
									className='w-full'
								/>
							</div>

							<div className='space-y-2'>
								<label
									htmlFor='minViewCount'
									className='block text-sm font-medium text-gray-700'
								>
									Minimum View Count
								</label>
								<Input
									id='minViewCount'
									placeholder='Enter minimum view count'
									type='text'
									value={minViewCount ?? ''}
									onChange={(e) => setMinViewCount(e.target.value)}
									className='w-full'
								/>
							</div>

							<div className='space-y-2'>
								<label
									htmlFor='keyword'
									className='block text-sm font-medium text-gray-700'
								>
									Keyword
								</label>
								<Input
									id='keyword'
									placeholder='Enter keyword'
									type='text'
									value={keyword ?? ''}
									onChange={(e) => setKeyword(e.target.value)}
									className='w-full'
								/>
							</div>

							<div className='pt-6'>
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
				</div>
			</Section>
		</Page>
	)
}
