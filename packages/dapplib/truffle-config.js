require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard release machine modify idea kangaroo army genius'; 
let testAccounts = [
"0x0b00788cbf472dd8228911caca159a7a4395c945c0601a48d4a8e14a4a4d010c",
"0x093cd4b06c480758868dbe193b005b1aebf468f0e2d64ee0284ff3531d520f6f",
"0xa027f8251fea6e2223b3c87c9573de3d5f49f56e4dfed63f0847364ddbc75d58",
"0x9969844841212fe2f76154aec4a1f2e34f0d09b32cc976935045c678ebeb8990",
"0xcbd3ce7e49950d9f95850761b37817aaa00340d775142ebeda7ea807f4f19047",
"0x4b56be1ab7f87b5842018014dcc583af06d92e9247e3bcd29d38b7d445196f66",
"0xa21f3eb1c59eaeafb354e6dcebe99a133aa235644bd6937c9771c89bb480ed8b",
"0xf830c5929d90a60557462fb94fb70e9a04008a1afe7bf9f8b37b8ef246032481",
"0x8aff3e245ca86ff34807fd911ac0b60cfada41350eb2eef39d530c9dfefc4453",
"0x3c2623a8c99673bad3f118661641ae8d9ad4841e290aa56f4961f021db32f378"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
