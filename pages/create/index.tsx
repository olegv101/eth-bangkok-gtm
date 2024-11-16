import Page from '@/components/page'
import { useEffect, useState } from 'react'
import { Address } from 'viem'
import Section from '@/components/section'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { usdcContractAbi, usdcContractAddress } from '@/lib/contracts/USDC'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { isEthereumWallet } from '@dynamic-labs/ethereum'
import CreateBountyButton from '@/components/transactions/CreateBountyButton'
import { HelpCircle, Plus, Image as ImageIcon, X } from 'lucide-react'
import { toast } from 'react-hot-toast'

const tooltipStyle = 'group relative cursor-help'
const tooltipTextStyle = 'invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-14 w-48 px-2 py-1 bg-gray-900 text-white text-sm rounded-md shadow-lg z-10 text-center'
const tooltipArrowStyle = 'invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-2 border-4 border-transparent border-t-gray-900'

export default function Create() {
	const { primaryWallet, network } = useDynamicContext()
	const [tokenAddress, setTokenAddress] = useState<Address | null>(
		usdcContractAddress[Number(network)],
	)
	const [tokenName, setTokenName] = useState<string | null>(null)
	const [tokenAmount, setTokenAmount] = useState<number | null>(null)
	const [minViewCount, setMinViewCount] = useState<number | null>(null)
	const [keyword, setKeyword] = useState<string | null>(null)
	const [created, setCreated] = useState<boolean>(false)
	const [isCreating, setIsCreating] = useState<boolean>(false)
	const [brief, setBrief] = useState<string>('')
	const [images, setImages] = useState<File[]>([])
	const [imageUrls, setImageUrls] = useState<string[]>([])

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

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files || [])
		if (files.length + images.length > 4) {
			toast.error('Maximum 4 images allowed')
			return
		}
		
		setImages(prev => [...prev, ...files])
		const newUrls = files.map(file => URL.createObjectURL(file))
		setImageUrls(prev => [...prev, ...newUrls])
	}

	const removeImage = (index: number) => {
		URL.revokeObjectURL(imageUrls[index])
		setImages(prev => prev.filter((_, i) => i !== index))
		setImageUrls(prev => prev.filter((_, i) => i !== index))
	}

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
								<div className='flex items-center gap-2'>
									<label
										htmlFor='tokenAddress'
										className='block text-sm font-medium text-gray-700'
									>
										Token Address
									</label>
									<div className={tooltipStyle}>
										<HelpCircle className='h-4 w-4 text-black/50 transition-colors' />
										<div className={tooltipTextStyle}>
											The ERC20 token address that will be used for the bounty reward
										</div>
										<div className={tooltipArrowStyle} />
									</div>
								</div>
								<Input
									id='tokenAddress'
									placeholder='Enter token address (0x...)'
									type='text'
									value={tokenAddress ?? ''}
									onChange={(e) => setTokenAddress(e.target.value as Address)}
									className='w-full'
								/>
								{tokenName && (
									<p className='text-sm text-custom-primary mt-1'>
										Token: {tokenName}
									</p>
								)}
							</div>

							<div className='space-y-2'>
								<div className='flex items-center gap-2'>
									<label
										htmlFor='amount'
										className='block text-sm font-medium text-gray-700'
									>
										Payout Amount
									</label>
									<div className={tooltipStyle}>
										<HelpCircle className='h-4 w-4 text-black/50 transition-colors' />
										<div className={tooltipTextStyle}>
											The amount of tokens to offer as a reward
										</div>
										<div className={tooltipArrowStyle} />
									</div>
								</div>
								<div className='relative'>
									<Input
										id='amount'
										placeholder='Enter token amount'
										type='number'
										min='0'
										value={tokenAmount ?? ''}
										onChange={(e) => {
											const value = e.target.value === '' ? null : Math.max(0, parseInt(e.target.value))
											setTokenAmount(value)
										}}
										className='w-full pr-24'
										onKeyDown={(e) => {
											if (e.key === '-' || e.key === 'e' || e.key === '.') {
												e.preventDefault()
											}
										}}
									/>
									{tokenName && (
										<div className='absolute right-2 top-1/2 -translate-y-1/2 px-4 py-[2px] bg-gray-50 rounded-full border border-black/10 text-sm'>
											{tokenName}
										</div>
									)}
								</div>
							</div>

							<div className='space-y-2'>
								<div className='flex items-center gap-2'>
									<label
										htmlFor='minViewCount'
										className='block text-sm font-medium text-gray-700'
									>
										Minimum View Count
									</label>
									<div className={tooltipStyle}>
										<HelpCircle className='h-4 w-4 text-black/50 transition-colors' />
										<div className={tooltipTextStyle}>
											Minimum number of views required on the tweet to claim the bounty
										</div>
										<div className={tooltipArrowStyle} />
									</div>
								</div>
								<Input
									id='minViewCount'
									placeholder='Enter minimum view count'
									type='number'
									min='0'
									value={minViewCount ?? ''}
									onChange={(e) => {
										const value = e.target.value === '' ? null : Math.max(0, parseInt(e.target.value))
										setMinViewCount(value)
									}}
									className='w-full'
									onKeyDown={(e) => {
										if (e.key === '-' || e.key === 'e' || e.key === '.') {
											e.preventDefault()
										}
									}}
								/>
							</div>

							<div className='space-y-2'>
								<div className='flex items-center gap-2'>
									<label
										htmlFor='keyword'
										className='block text-sm font-medium text-gray-700'
									>
										Keyword
									</label>
									<div className={tooltipStyle}>
										<HelpCircle className='h-4 w-4 text-black/50 transition-colors' />
										<div className={tooltipTextStyle}>
											The keyword that must be included in the tweet. Could be a hashtag, a product name, etc.
										</div>
										<div className={tooltipArrowStyle} />
									</div>
								</div>
								<Input
									id='keyword'
									placeholder='Enter keyword'
									type='text'
									value={keyword ?? ''}
									onChange={(e) => setKeyword(e.target.value)}
									className='w-full'
								/>
							</div>

							<div className='space-y-2'>
								<div className='flex items-center gap-2'>
									<label
										htmlFor='brief'
										className='block text-sm font-medium text-gray-700'
									>
										Tweet Brief
									</label>
									<div className={tooltipStyle}>
										<HelpCircle className='h-4 w-4 text-black/50 transition-colors' />
										<div className={tooltipTextStyle}>
											Provide guidance on how the tweet should be written
										</div>
										<div className={tooltipArrowStyle} />
									</div>
								</div>
								<Textarea
									id='brief'
									placeholder='Describe what youre promoting and how the tweet should sound...'
									value={brief}
									onChange={(e) => setBrief(e.target.value)}
									className='w-full min-h-[100px]'
								/>
							</div>

							<div className='space-y-2'>
								<div className='flex items-center gap-2'>
									<label
										htmlFor='images'
										className='block text-sm font-medium text-gray-700'
									>
										Images
									</label>
									<div className={tooltipStyle}>
										<HelpCircle className='h-4 w-4 text-black/50 transition-colors' />
										<div className={tooltipTextStyle}>
											Give users the option to include images in their tweet.
										</div>
										<div className={tooltipArrowStyle} />
									</div>
								</div>
								
								<div className='grid grid-cols-2 gap-4'>
									{imageUrls.map((url, index) => (
										<div key={url} className='relative group'>
											<img
												src={url}
												alt={`Upload ${index + 1}`}
												className='w-full h-40 object-cover rounded-lg'
											/>
											<button
												onClick={() => removeImage(index)}
												className='absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity'
											>
												<X className='h-4 w-4' />
											</button>
										</div>
									))}
									
									{imageUrls.length < 4 && (
										<label className='border-2 border-dashed border-gray-300 rounded-lg p-4 h-40 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors'>
											<ImageIcon className='h-8 w-8 text-gray-400' />
											<span className='mt-2 text-sm text-gray-500'>Add Image</span>
											<input
												type='file'
												accept='image/*'
												onChange={handleImageUpload}
												className='hidden'
												multiple
											/>
										</label>
									)}
								</div>
							</div>

							<div className='pt-6'>
								<CreateBountyButton
									tokenAddress={tokenAddress}
									tokenAmount={tokenAmount}
									minViewCount={minViewCount?.toString() ?? ''}
									keyword={keyword}
									onCreated={() => {
										setCreated(true)
										setIsCreating(false)
									}}
									isCreating={isCreating}
									setIsCreating={setIsCreating}
								>
									<Plus className="mr-2 h-4 w-4" />
									{isCreating ? 'Creating...' : 'Create Bounty'}
								</CreateBountyButton>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</Page>
	)
}
