import { Configuration } from '@alephium/cli'
import { configDotenv } from 'dotenv'

export type Settings = {}

configDotenv()
const configuration: Configuration<Settings> = {
  networks: {
    devnet: {
      //Make sure the two values match what's in your devnet configuration
      nodeUrl: 'http://127.0.0.1:22973',
      networkId: 4,
      privateKeys: ['a642942e67258589cd2b1822c631506632db5a12aabcf413604e785300d762a5', '615865d89812a9ea9eff3e1a8d8dead3534673f3203cb789c45c7ec7d8c2d977'],
      settings: []
    },
    testnet:{
         //Make sure the two values match what's in your devnet configuration
      nodeUrl: process.env.TESTNET_NODE,
      networkId: 1,
      privateKeys: process.env.TESTNET_PRIVATE_KEYS === undefined ? [] : process.env.TESTNET_PRIVATE_KEYS.split(','),
      settings: []
    },
    mainnet: {
         //Make sure the two values match what's in your devnet configuration
      nodeUrl: process.env.MAINNET_NODE === undefined ? 'http://localhost:12973' : process.env.MAINNET_NODE ,
      networkId: 0,
      privateKeys: process.env.MAINNET_PRIVATE_KEYS === undefined ? [] : process.env.MAINNET_PRIVATE_KEYS.split(','),
      settings: []
    }
  }
}

export default configuration