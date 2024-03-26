// Function to generate wallets
async function generateWallets(count, withSeedPhrase) {
    try {
        if (count < 1 || count > 100) {
            throw new Error('Number of wallets must be between 1 and 100.');
        }

        const wallets = [];

        // Generate wallets
        for (let i = 0; i < count; i++) {
            const wallet = withSeedPhrase ? ethers.Wallet.createRandom() : new ethers.Wallet.createRandom();
            wallets.push(wallet);
        }

        // Display wallet addresses and save seed phrases or private keys to files
        for (const wallet of wallets) {
            console.log('Wallet Address:', wallet.address);

            if (withSeedPhrase) {
                const seedPhrase = wallet.mnemonic.phrase;
                console.log('Seed Phrase:', seedPhrase);
                await fs.writeFile(`wallet_${wallet.address}_seed_phrase.txt`, seedPhrase);
            } else {
                const privateKey = wallet.privateKey;
                console.log('Private Key:', privateKey);
                await fs.writeFile(`wallet_${wallet.address}_private_key.txt`, privateKey);
            }

            console.log();
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Export the generateWallets function
module.exports = { generateWallets };
