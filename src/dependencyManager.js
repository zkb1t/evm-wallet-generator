const npmApi = require('npm-api');
const semver = require('semver');
const { exec } = require('child_process');
const fs = require('fs');
const { promisify } = require('util');

const logFile = 'dependency_update.log';

// Function to log messages to a file
const logMessage = async (message) => {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;

    try {
        await promisify(fs.appendFile)(logFile, logEntry);
    } catch (error) {
        console.error('Error writing to log file:', error);
    }
};

// Function to get dependencies from package.json
const getDependencies = () => {
    try {
        const packageJson = require('../package.json');
        return packageJson.dependencies;
    } catch (error) {
        throw new Error('Error reading package.json:', error);
    }
};

// Function to get the latest version of a package from NPM
const getLatestVersion = async (packageName) => {
    try {
        const npm = npmApi();
        const pkg = npm.repo(packageName);
        const latestVersion = await pkg.version('latest');
        return latestVersion;
    } catch (error) {
        throw new Error(`Error getting latest version of ${packageName} from NPM: ${error.message}`);
    }
};

// Function to update a dependency
const updateDependency = async (packageName, newVersion) => {
    try {
        await promisify(exec)(`npm install ${packageName}@${newVersion} --save`);
    } catch (error) {
        throw new Error(`Error updating ${packageName} to version ${newVersion}: ${error.message}`);
    }
};

// Main function to check and update dependencies
const checkAndUpdateDependencies = async () => {
    try {
        const dependencies = getDependencies();
        for (const [packageName, currentVersion] of Object.entries(dependencies)) {
            const latestVersion = await getLatestVersion(packageName);
            if (semver.gt(latestVersion, currentVersion)) {
                await updateDependency(packageName, latestVersion);
                await logMessage(`Package ${packageName} updated to version ${latestVersion}.`);
            }
        }
        await logMessage('Dependency check completed.');
    } catch (error) {
        console.error('Error occurred during dependency update:', error);
        await logMessage(`Error occurred during dependency update: ${error.message}`);
    }
};

module.exports = { checkAndUpdateDependencies };
