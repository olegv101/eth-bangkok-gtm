import { Address } from 'viem'
import { baseSepolia } from 'viem/chains'
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
	scrollTestnet,
	unichain,
	zircuitTestnet,
} from '../constants'

export const usdcContractAddress: Record<number, Address> = {
	[baseSepolia.id]: '0xFC033C2A76EF29F9264deeC78fd18172e3dCFF6f', // Base Sepolia
	[celoTestnet.id]: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Celo Testnet
	[fhenixTestnet.id]: '0xAc3934f8cc641c83FAeD3c1b6123B68518A04649', // Fhenix Testnet
	[flow.id]: '0xB1bf75ED16075C2a1684079632FB7DeBFdcB85B0', // Flow Testnet
	[incoTestnet.id]: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Inco Testnet
	[lineaTestnet.id]: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Linea Testnet
	[mantleTestnet.id]: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Mantle Testnet
	[morphHoleskyTestnet.id]: '0xb286f8D4C9bfa37432d767Ac5DC6B671597fE1eC', // Morph Holesky Testnet
	[neonTestnet.id]: '0x663899D607Feb4588D6A339d1f3990Acd9f1Ef3a', // Neon Testnet
	[oasisTestnet.id]: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Oasis Testnet
	[polygonZkEvm.id]: '0xb286f8D4C9bfa37432d767Ac5DC6B671597fE1eC', // Polygon zkEVM
	[scrollTestnet.id]: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // Scroll Sepolia
	[unichain.id]: '0xB1bf75ED16075C2a1684079632FB7DeBFdcB85B0', // Unichain Sepolia
	[zircuitTestnet.id]: '0xbA760B4b7e91d2fC544F41608dBF79E1E27815C1', // Zircuit Testnet
	[bitKubTestnet.id]: '0x4581ea49EF41e55FcE60cc43D5752F5955bf6AD1', // BitKub Testnet
}

export const usdcContractAbi = [
	{ type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
	{
		type: 'function',
		name: 'DOMAIN_SEPARATOR',
		inputs: [],
		outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'allowance',
		inputs: [
			{ name: '', type: 'address', internalType: 'address' },
			{ name: '', type: 'address', internalType: 'address' },
		],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'approve',
		inputs: [
			{ name: 'spender', type: 'address', internalType: 'address' },
			{ name: 'amount', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'balanceOf',
		inputs: [{ name: '', type: 'address', internalType: 'address' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'burn',
		inputs: [
			{ name: 'from', type: 'address', internalType: 'address' },
			{ name: 'amount', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'decimals',
		inputs: [],
		outputs: [{ name: '', type: 'uint8', internalType: 'uint8' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'mint',
		inputs: [
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'amount', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'name',
		inputs: [],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'nonces',
		inputs: [{ name: '', type: 'address', internalType: 'address' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'permit',
		inputs: [
			{ name: 'owner', type: 'address', internalType: 'address' },
			{ name: 'spender', type: 'address', internalType: 'address' },
			{ name: 'value', type: 'uint256', internalType: 'uint256' },
			{ name: 'deadline', type: 'uint256', internalType: 'uint256' },
			{ name: 'v', type: 'uint8', internalType: 'uint8' },
			{ name: 'r', type: 'bytes32', internalType: 'bytes32' },
			{ name: 's', type: 'bytes32', internalType: 'bytes32' },
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'symbol',
		inputs: [],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'totalSupply',
		inputs: [],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'transfer',
		inputs: [
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'amount', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'transferFrom',
		inputs: [
			{ name: 'from', type: 'address', internalType: 'address' },
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'amount', type: 'uint256', internalType: 'uint256' },
		],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'nonpayable',
	},
	{
		type: 'event',
		name: 'Approval',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'spender',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'amount',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'Transfer',
		inputs: [
			{
				name: 'from',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'to',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'amount',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256',
			},
		],
		anonymous: false,
	},
] as const
