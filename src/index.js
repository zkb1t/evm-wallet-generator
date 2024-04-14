const { program } = require('commander');
const { generateWallets } = require('./walletGenerator');
const { checkAndUpdateDependencies } = require('./dependencyManager');

// Define the main application logic
async function main() {
    // Define program commands and options
    program
        .option('-c, --count <count>', 'Number of wallets to generate (between 1 and 100)', parseInt)
        .option('-s, --seed', 'Generate wallets with seed phrases')
        .option('-k, --privateKey', 'Generate wallets with private keys')
        .parse(process.argv);

    // Get the provided options
    const options = program.opts();

    // Check if the count option is provided
    if (!options.count || options.count < 1 || options.count > 100) {
        console.error('Please specify the number of wallets to generate using the --count option (between 1 and 100).');
        process.exit(1);
    }

    // Check if either seed or private key option is provided
    if (!options.seed && !options.privateKey) {
        console.error('Please specify either --seed or --privateKey option.');
        process.exit(1);
    }

    // Generate wallets
    await generateWallets(options.count, options.seed);

    // Check and update dependencies
    await checkAndUpdateDependencies();
}

// Call the main function
main().catch(error => console.error('Unhandled error occurred:', error));
