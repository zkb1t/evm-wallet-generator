# EVM Wallet Generator

This project is a tool for generating Ethereum Virtual Machine (EVM) wallets with the ability to save the seed phrase or private key to a separate text file. It is based on Node.js and uses npm for dependency management.

## Installation

To use this application, you will need Node.js. Follow these steps to install and run the project:

1. Clone the repository:

```bash
git clone https://github.com/zkb1t/evm-wallet-generator.git
```

2. Navigate to the project directory:

```bash
cd evm-wallet-generator
```

3. Install dependencies:

```bash
npm install
```

## Usage

After installing all dependencies, run the application with the following command:

```bash
node src/index.js
```

The application will provide you with a command-line interface for interaction. Follow the prompts to generate a new wallet and save the seed phrase or private key to a separate file.

## Project Structure

```
evm-wallet-generator/
│
├── src/
│   ├── index.js                # Main application file
│   ├── walletGenerator.js      # Module for wallet generation
│   └── fileHandler.js          # Module for file operations
│
├── package.json                # Dependency and script file
├── README.md                   # Usage instructions
└── .gitignore                  # File to ignore unnecessary files in Git
```

## Dependencies

Main dependencies of the project:

- [ethers.js](https://github.com/ethers-io/ethers.js): For working with Ethereum wallets and cryptographic functions.
- [Commander.js](https://github.com/tj/commander.js/): For creating a command-line interface.

## Contribution

If you have any suggestions for improving the project or found a bug, feel free to create an issue or make a pull request. Your contribution is welcome!

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
