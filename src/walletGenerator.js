// Import necessary modules
const ethers = require('ethers');
const fs = require('fs').promises;

// Function to generate wallets
async function generateWallets(count, withSeedPhrase) {
    try {
        if (count < 1 || count > 100) {
            throw new Error('Number of wallets must be between 1 and 100.');
        }

        const walletsData = [];

        // Generate wallets
        for (let i = 0; i < count; i++) {
            const wallet = ethers.Wallet.createRandom();
            const walletData = {
                address: wallet.address,
                seedPhrase: withSeedPhrase ? wallet.mnemonic.phrase : null,
                privateKey: withSeedPhrase ? null : wallet.privateKey
            };
            walletsData.push(walletData);
        }

        // Create data string to write to file
        let dataString = '';
        for (const walletData of walletsData) {
            dataString += `Wallet Address: ${walletData.address}\n`;
            if (walletData.seedPhrase) {
                dataString += `Seed Phrase: ${walletData.seedPhrase}\n`;
            } else {
                dataString += `Private Key: ${walletData.privateKey}\n`;
            }
            dataString += '\n';
        }

        // Write data to file
        await fs.writeFile('wallets_data.txt', dataString);
        console.log('Wallets data saved to wallets_data.txt');
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Export the generateWallets function
module.exports = { generateWallets };
