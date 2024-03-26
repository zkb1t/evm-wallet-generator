// Import necessary modules
const ethers = require('ethers');
const fs = require('fs').promises;

// Function to generate a wallet
async function generateWallet(type) {
    try {
        // Generate seed phrase
        if (type === 'seed') {
            const wallet = ethers.Wallet.createRandom();
            const seedPhrase = wallet.mnemonic.phrase;
            console.log('Seed Phrase:', seedPhrase);

            // Save seed phrase to file
            await fs.writeFile('wallet_seed_phrase.txt', seedPhrase);
            console.log('Seed Phrase saved to wallet_seed_phrase.txt');
        }
        // Generate private key
        else if (type === 'privateKey') {
            const wallet = new ethers.Wallet.createRandom();
            const privateKey = wallet.privateKey;
            console.log('Private Key:', privateKey);

            // Save private key to file
            await fs.writeFile('wallet_private_key.txt', privateKey);
            console.log('Private Key saved to wallet_private_key.txt');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Export the generateWallet function
module.exports = { generateWallet };
