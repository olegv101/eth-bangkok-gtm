import { Address } from 'viem'

export const bountyAddress: Record<number, Address> = {
	84532: '0x6830f2A16bB4926922696C1bCD710A0B7dC102e9', // Base Sepolia
	974399131: '0xAc3934f8cc641c83FAeD3c1b6123B68518A04649', // Skale
	1301: '0xC0eBF6f0dd14937Dd5606f4948D296593F7b1141', // Unichain
	1101: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Polygon ZKEVM
	1513: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Story Protocol
	22040: '0x20e11C584E5F30BB48cBF452B20aCB9E2D4A843C', // AirDAO
	100: '0xb18130AF620E1AcF51eEF5a191d08d6EfC47fFE0', // Gnosis Chain
	545: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Flow Testnet
	296: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Hedera
	48899: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Zircuit
	2810: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Morph
	80002: '0xb18130AF620E1AcF51eEF5a191d08d6EfC47fFE0', // Polygon zkEVM
}
export const bountyABI = [
	{ type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
	{
		type: 'function',
		name: 'bounties',
		inputs: [{ name: 'bountyId', type: 'uint256', internalType: 'uint256' }],
		outputs: [
			{ name: 'tweetId', type: 'string', internalType: 'string' },
			{ name: 'keyword', type: 'string', internalType: 'string' },
			{ name: 'bountyToken', type: 'address', internalType: 'contract ERC20' },
			{ name: 'bountyCreator', type: 'address', internalType: 'address' },
			{ name: 'bountyAmount', type: 'uint256', internalType: 'uint256' },
			{ name: 'minViewCount', type: 'uint256', internalType: 'uint256' },
			{ name: 'filledAt', type: 'uint256', internalType: 'uint256' },
			{ name: 'filledBy', type: 'address', internalType: 'address' },
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'bountyIds',
		inputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'createBounty',
		inputs: [
			{ name: 'bountyAmount', type: 'uint256', internalType: 'uint256' },
			{ name: 'minViewCount', type: 'uint256', internalType: 'uint256' },
			{ name: 'keyword', type: 'string', internalType: 'string' },
			{ name: 'bountyToken', type: 'address', internalType: 'contract ERC20' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'fillBounty',
		inputs: [
			{ name: 'bountyId', type: 'uint256', internalType: 'uint256' },
			{ name: 'tweetId', type: 'string', internalType: 'string' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'getBounties',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'tuple[]',
				internalType: 'struct Bounty.Bounty[]',
				components: [
					{ name: 'tweetId', type: 'string', internalType: 'string' },
					{ name: 'keyword', type: 'string', internalType: 'string' },
					{
						name: 'bountyToken',
						type: 'address',
						internalType: 'contract ERC20',
					},
					{ name: 'bountyCreator', type: 'address', internalType: 'address' },
					{ name: 'bountyAmount', type: 'uint256', internalType: 'uint256' },
					{ name: 'minViewCount', type: 'uint256', internalType: 'uint256' },
					{ name: 'filledAt', type: 'uint256', internalType: 'uint256' },
					{ name: 'filledBy', type: 'address', internalType: 'address' },
				],
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'owner',
		inputs: [],
		outputs: [{ name: '', type: 'address', internalType: 'address' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'renounceOwnership',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'transferOwnership',
		inputs: [{ name: 'newOwner', type: 'address', internalType: 'address' }],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'tweetToViewCount',
		inputs: [{ name: 'tweetId', type: 'string', internalType: 'string' }],
		outputs: [{ name: 'viewCount', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'verifyTweet',
		inputs: [
			{ name: 'tweetId', type: 'string', internalType: 'string' },
			{ name: 'viewCount', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'event',
		name: 'OwnershipTransferred',
		inputs: [
			{
				name: 'previousOwner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'newOwner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		type: 'error',
		name: 'OwnableInvalidOwner',
		inputs: [{ name: 'owner', type: 'address', internalType: 'address' }],
	},
	{
		type: 'error',
		name: 'OwnableUnauthorizedAccount',
		inputs: [{ name: 'account', type: 'address', internalType: 'address' }],
	},
]
