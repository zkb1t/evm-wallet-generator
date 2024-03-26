// Import necessary modules
const { program } = require('commander');
const { generateWallet } = require('./walletGenerator');

// Define the main application logic
async function main() {
    // Define program commands and options
    program
        .option('--seed', 'Generate a wallet with a seed phrase')
        .option('--privateKey', 'Generate a wallet with a private key')
        .parse(process.argv);

    // Get the provided options
    const options = program.opts();

    // Check if any option is provided
    if (!options.seed && !options.privateKey) {
        console.error('Please specify either --seed or --privateKey option.');
        process.exit(1);
    }

    // Generate wallet based on the selected option
    if (options.seed) {
        await generateWallet('seed');
    } else if (options.privateKey) {
        await generateWallet('privateKey');
    }
}

// Call the main function
main();
