import { baseSepolia } from 'viem/chains'
import { createPublicClient, defineChain, Hex, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

export const DEFAULT_CHAIN = baseSepolia

export const account = privateKeyToAccount(
	process.env.NEXT_PUBLIC_PRIVATE_KEY as Hex,
)

export const getPublicClient = (chainId: number) => {
	return createPublicClient({ chain: getChain(chainId), transport: http() })
}

export const getChain = (chainId: number) => {
	return supportedNetworks.find((chain) => chain.id == chainId)
}
export const kintoTestnet = defineChain({
	id: 25925,
	name: 'BitKub Testnet',
	rpcUrls: {
		default: { http: ['https://rpc-testnet.bitkubchain.io'] },
		public: { http: ['https://rpc-testnet.bitkubchain.io'] },
	},
	blockExplorers: {
		default: {
			name: 'BitKub',
			url: 'https://testnet.bkcscan.com/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'KUB',
		symbol: 'KUB',
	},
})
export const bitKubTestnet = defineChain({
	id: 25925,
	name: 'BitKub Testnet',
	rpcUrls: {
		default: { http: ['https://rpc-testnet.bitkubchain.io'] },
		public: { http: ['https://rpc-testnet.bitkubchain.io'] },
	},
	blockExplorers: {
		default: {
			name: 'BitKub',
			url: 'https://testnet.bkcscan.com/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'KUB',
		symbol: 'KUB',
	},
})
export const scrollTestnet = defineChain({
	id: 534351,
	name: 'Scroll Testnet',
	rpcUrls: {
		default: { http: ['https://sepolia-rpc.scroll.io/'] },
		public: { http: ['https://sepolia-rpc.scroll.io/'] },
	},
	blockExplorers: {
		default: {
			name: 'Scroll',
			url: 'https://scroll-sepolia.blockscout.com/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'ETH',
		symbol: 'ETH',
	},
})
export const mantleTestnet = defineChain({
	id: 5003,
	name: 'Mantle Testnet',
	rpcUrls: {
		default: { http: ['https://rpc.sepolia.mantle.xyz'] },
		public: { http: ['https://rpc.sepolia.mantle.xyz'] },
	},
	blockExplorers: {
		default: {
			name: 'Mantle',
			url: 'https://explorer.sepolia.mantle.xyz/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'MNT',
		symbol: 'MNT',
	},
})
export const chilizTestnet = defineChain({
	id: 88882,
	name: 'Chiliz Testnet',
	rpcUrls: {
		default: { http: ['https://spicy-rpc.chiliz.com/'] },
		public: { http: ['https://spicy-rpc.chiliz.com/'] },
	},
	blockExplorers: {
		default: {
			name: 'Chiliz',
			url: 'https://testnet.chiliscan.com/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'CHZ',
		symbol: 'CHZ',
	},
})
export const incoTestnet = defineChain({
	id: 21097,
	name: 'Inco Testnet',
	rpcUrls: {
		default: { http: ['https://validator.rivest.inco.org/'] },
		public: { http: ['https://validator.rivest.inco.org/'] },
	},
	blockExplorers: {
		default: {
			name: 'Inco',
			url: 'https://explorer.rivest.inco.org/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'INCO',
		symbol: 'INCO',
	},
})
export const unichain = defineChain({
	id: 1301,
	name: 'Unichain Sepolia',
	rpcUrls: {
		default: { http: ['https://sepolia.unichain.org'] },
		public: { http: ['https://sepolia.unichain.org'] },
	},
	blockExplorers: {
		default: {
			name: 'Uniscan',
			url: 'https://sepolia.uniscan.xyz/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Ether',
		symbol: 'ETH',
	},
})
export const polygonZkEvm = defineChain({
	id: 80002,
	name: 'Polygon zkEVM',
	rpcUrls: {
		default: { http: ['https://rpc-amoy.polygon.technology/'] },
		public: { http: ['https://rpc-amoy.polygon.technology/'] },
	},
	blockExplorers: {
		default: {
			name: 'PolygonScan',
			url: 'https://cardona-zkevm.polygonscan.com/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Polygon',
		symbol: 'POL',
	},
})
export const flow = defineChain({
	id: 545,
	name: 'Flow',
	rpcUrls: {
		default: { http: ['https://testnet.evm.nodes.onflow.org/'] },
		public: { http: ['https://testnet.evm.nodes.onflow.org/'] },
	},
	blockExplorers: {
		default: {
			name: 'FlowDiver',
			url: 'https://testnet.flowdiver.io/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Flow',
		symbol: 'FLOW',
	},
})
export const hederaTestnet = defineChain({
	id: 296,
	name: 'Hedera EVM Testnet',
	rpcUrls: {
		default: { http: ['https://testnet.hashio.io/api'] },
		public: { http: ['https://testnet.hashio.io/api'] },
	},
	blockExplorers: {
		default: {
			name: 'HashScan',
			url: 'https://hashscan.io/testnet/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Hedera',
		symbol: 'HBAR',
	},
})
export const celoTestnet = defineChain({
	id: 44787,
	name: 'Celo Testnet',
	rpcUrls: {
		default: { http: ['	https://alfajores-forno.celo-testnet.org'] },
		public: { http: ['	https://alfajores-forno.celo-testnet.org'] },
	},
	blockExplorers: {
		default: {
			name: 'Celo alfajores',
			url: 'https://celo-alfajores.blockscout.com/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Celo',
		symbol: 'CELO',
	},
})
export const zircuitTestnet = defineChain({
	id: 48899,
	name: 'Zircuit Testnet',
	rpcUrls: {
		default: { http: ['https://zircuit1-testnet.p2pify.com'] },
		public: { http: ['https://zircuit1-testnet.p2pify.com'] },
	},
	blockExplorers: {
		default: {
			name: 'Zircuit Explorer',
			url: 'https://explorer.testnet.zircuit.com/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Ethereum',
		symbol: 'ETH',
	},
})
export const neonTestnet = defineChain({
	id: 245022926,
	name: 'Neon Testnet',
	rpcUrls: {
		default: { http: ['https://devnet.neonevm.org'] },
		public: { http: ['https://devnet.neonevm.org'] },
	},
	blockExplorers: {
		default: {
			name: 'Neon',
			url: 'https://neon-devnet.blockscout.com/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Neon',
		symbol: 'NEON',
	},
})
export const rootstockTestnet = defineChain({
	id: 31,
	name: 'Rootstock Testnet',
	rpcUrls: {
		default: { http: ['https://public-node.testnet.rsk.co'] },
		public: { http: ['https://public-node.testnet.rsk.co'] },
	},
	blockExplorers: {
		default: {
			name: 'Rootstock',
			url: 'https://rootstock-testnet.blockscout.com/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Rootstock',
		symbol: 'RSK',
	},
})
export const morphHoleskyTestnet = defineChain({
	id: 2810,
	name: 'Morph Holesky Testnet',
	rpcUrls: {
		default: { http: ['https://rpc-quicknode-holesky.morphl2.io/'] },
		public: { http: ['https://rpc-quicknode-holesky.morphl2.io/'] },
	},
	blockExplorers: {
		default: {
			name: 'Morph Explorer',
			url: 'https://explorer-holesky.morphl2.io/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Ethereum',
		symbol: 'ETH',
	},
})
export const fhenixTestnet = defineChain({
	id: 8008135,
	name: 'Fhenix',
	rpcUrls: {
		default: { http: ['https://api.helium.fhenix.zone/'] },
		public: { http: ['https://api.helium.fhenix.zone/'] },
	},
	blockExplorers: {
		default: {
			name: 'Fhenix Explorer',
			url: 'https://explorer.helium.fhenix.zone/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Test Fhenix',
		symbol: 'tFHE',
	},
})
export const oasisTestnet = defineChain({
	id: 23295,
	name: 'Oasis Sapphire',
	rpcUrls: {
		default: { http: ['https://testnet.sapphire.oasis.io'] },
		public: { http: ['https://testnet.sapphire.oasis.io'] },
	},
	blockExplorers: {
		default: {
			name: 'Sapphire',
			url: 'https://explorer.oasis.io/testnet/sapphire',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Oasis',
		symbol: 'OASIS',
	},
})
export const romeTestnet = defineChain({
	id: 200002,
	name: 'Oasis Sapphire',
	rpcUrls: {
		default: { http: ['https://rome.testnet.romeprotocol.xyz'] },
		public: { http: ['https://rome.testnet.romeprotocol.xyz'] },
	},
	blockExplorers: {
		default: {
			name: 'Rome',
			url: 'https://rome.testnet.romeprotocol.xyz:1000',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Rome',
		symbol: 'ROME',
	},
})
export const lineaTestnet = defineChain({
	id: 59141,
	name: 'Linea Testnet',
	rpcUrls: {
		default: { http: ['https://rpc.sepolia.linea.build'] },
		public: { http: ['https://rpc.sepolia.linea.build'] },
	},
	blockExplorers: {
		default: {
			name: 'Linea',
			url: 'https://sepolia.lineascan.build/',
		},
	},
	nativeCurrency: {
		decimals: 18,
		name: 'Linea',
		symbol: 'ETH',
	},
})

const supportedNetworks = [
	kintoTestnet,
	bitKubTestnet,
	scrollTestnet,
	mantleTestnet,
	chilizTestnet,
	incoTestnet,
	unichain,
	polygonZkEvm,
	flow,
	hederaTestnet,
	celoTestnet,
	zircuitTestnet,
	neonTestnet,
	rootstockTestnet,
	morphHoleskyTestnet,
	fhenixTestnet,
	oasisTestnet,
	romeTestnet,
	lineaTestnet,
]

// Gnosis - Mainnet
// Rootstock - Mainnet
// Base - Sepolia Testnet
// Neon EVM - Testnet
// Zircuit - Testnet
// Skale - Calypso Testnet
// Unichain - Sepolia Testnet
// Story - Testnet
// Morph - Holesky Testnet
// Fhenix - Testnet
// Polygon zkEVM - Mainnet
export const evmNetworks = supportedNetworks.map((chain) => ({
	blockExplorerUrls: [chain.blockExplorers?.default?.url!],
	chainId: chain.id,
	chainName: chain.name,
	iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
	name: chain.name,
	nativeCurrency: chain.nativeCurrency,
	networkId: chain.id,
	rpcUrls: [chain.rpcUrls.default.http[0]],
}))
