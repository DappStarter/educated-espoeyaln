require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace casual flee seed edge rare remain purpose idea kite furnace seminar'; 
let testAccounts = [
"0xdd046f71ac40214881405ad035af71c0be73f229edb8cf3e3cd2bf2c726934e2",
"0xacf0b2fecfa8bfc3a1dab53566c20c4b807aeaf835a729e73c078a080ecf7199",
"0x3c4a3b95f683c1cadb9350ea05988e4d1af1a3b757fdad5c8ed820fad3940379",
"0x41ed23ad9a209d4fed5aeea0e042a7ec350926f0a3e31a3ccf064bbd25bd0459",
"0xc2567dd27f1b6399e98c93ede880f47e026d06c0eb2c9ca58c0a454b5b312b9e",
"0x4ad940ad9fb72940556542b7bdaffbddb89c1dabe7febf64556186e8b802c5dd",
"0x1a1c3d7a02ee97912fe7dc3e0167b7e3650b460daa4b740fe96b5f77dedd2ad4",
"0xf6a40fca43aff0ec078715cf77c1abd6ac9a74b7400e2141eba53ed8db540ea9",
"0xa24d260d13cec4a451734c7332a765f99ca060e9053dc3abd43c82c0c1dc6616",
"0xf5c9409a926f98d6b63f20186b2ed21e6666ec34ffce4104a19b44fa1b53642e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


