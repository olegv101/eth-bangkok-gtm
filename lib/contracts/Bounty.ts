import { Address } from 'viem'
import {
	bitKubTestnet,
	celoTestnet,
	fhenixTestnet,
	flow,
	incoTestnet,
	lineaTestnet,
	mantleTestnet,
	morphHoleskyTestnet,
	neonTestnet,
	oasisTestnet,
	polygonZkEvm,
	romeTestnet,
	scrollTestnet,
	unichain,
	zircuitTestnet,
} from '../constants'
import { baseSepolia, scrollSepolia } from 'viem/chains'

export const bountyAddress: Record<number, Address> = {
	[baseSepolia.id]: '0x6830f2A16bB4926922696C1bCD710A0B7dC102e9', // Base Sepolia
	[celoTestnet.id]: '0x20e11C584E5F30BB48cBF452B20aCB9E2D4A843C', // Celo Testnet
	[fhenixTestnet.id]: '0xC0eBF6f0dd14937Dd5606f4948D296593F7b1141', // Fhenix Testnet
	[flow.id]: '0xbA760B4b7e91d2fC544F41608dBF79E1E27815C1', // Flow Testnet
	[incoTestnet.id]: '0x20e11C584E5F30BB48cBF452B20aCB9E2D4A843C', // Inco Testnet
	[lineaTestnet.id]: '0x20e11C584E5F30BB48cBF452B20aCB9E2D4A843C', // Linea Testnet
	[mantleTestnet.id]: '0x20e11C584E5F30BB48cBF452B20aCB9E2D4A843C', // Mantle Testnet
	[morphHoleskyTestnet.id]: '0x569eBd53e4a129D89db141649c3ACFC3BA499ACc', // Morph Holesky Testnet
	[neonTestnet.id]: '0x30eeC1609b82CEaC3bd75EC9Aab30a47A142bfc6', // Neon Testnet
	[oasisTestnet.id]: '0x20e11C584E5F30BB48cBF452B20aCB9E2D4A843C', // Oasis Testnet
	[polygonZkEvm.id]: '0x569eBd53e4a129D89db141649c3ACFC3BA499ACc', // Polygon zkEVM
	[scrollTestnet.id]: '0x20e11C584E5F30BB48cBF452B20aCB9E2D4A843C', // Scroll Sepolia
	[unichain.id]: '0xbA760B4b7e91d2fC544F41608dBF79E1E27815C1', // Unichain Sepolia
	[zircuitTestnet.id]: '0xAc3934f8cc641c83FAeD3c1b6123B68518A04649', // Zircuit Testnet
	[bitKubTestnet.id]: '0x20e11C584E5F30BB48cBF452B20aCB9E2D4A843C', // BitKub Testnet
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
