// Import necessary modules
const { program } = require('commander');
const { generateWallet } = require('./walletGenerator');

// Define the main application logic
async function main() {
    // Define program commands and options
    program
        .option('-s, --seed', 'Generate a wallet with a seed phrase')
        .option('-k, --privateKey', 'Generate a wallet with a private key')
        .parse(process.argv);

    // Generate wallet based on the selected option
    if (program.seed) {
        await generateWallet('seed');
    } else if (program.privateKey) {
        await generateWallet('privateKey');
    } else {
        console.error('Please specify either --seed or --privateKey option.');
        process.exit(1);
    }
}

// Call the main function
main();
