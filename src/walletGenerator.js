// Import necessary modules
const ethers = require('ethers');
const fs = require('fs').promises;

// Function to generate wallets
async function generateWallets(count) {
    try {
        if (count < 1 || count > 100) {
            throw new Error('Number of wallets must be between 1 and 100.');
        }

        const wallets = [];

        // Generate wallets
        for (let i = 0; i < count; i++) {
            const wallet = ethers.Wallet.createRandom();
            wallets.push(wallet);
        }

        // Display wallet addresses and save seed phrases or private keys to files
        for (const wallet of wallets) {
            console.log('Wallet Address:', wallet.address);

            const seedPhrase = wallet.mnemonic.phrase;
            const privateKey = wallet.privateKey;

            console.log('Seed Phrase:', seedPhrase);
            console.log('Private Key:', privateKey);
            console.log();

            // Save seed phrase and private key to files
            await fs.writeFile(`wallet_${wallet.address}_seed_phrase.txt`, seedPhrase);
            await fs.writeFile(`wallet_${wallet.address}_private_key.txt`, privateKey);
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Export the generateWallets function
module.exports = { generateWallets };
