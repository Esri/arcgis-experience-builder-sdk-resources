const { execSync } = require('child_process');
const { readdirSync, statSync } = require('fs');
const { join, resolve } = require('path');


const initialDir = process.cwd(); // Store the initial working directory

function findDirectSubfolders(dir) {
    const subfolders = [];
    const items = readdirSync(dir);

    items.forEach(item => {
        const fullPath = join(dir, item);
        if (statSync(fullPath).isDirectory()) {
            // Check if the directory contains a package.json file
            if (readdirSync(fullPath).includes('package.json')) {
                subfolders.push(fullPath);
            }
        }
    });

    return subfolders;
}

function installInSubfolders(subfolders) {
    subfolders.forEach(folder => {
        try {
            console.log(`Installing npm packages in ${folder}...`);
            process.chdir(folder);
            execSync('npm install', { stdio: 'inherit' });
        } catch (error) {
            console.error(`Failed to install in ${folder}: ${error}`);
            // process.exit(1);
        } finally {
            process.chdir(initialDir); // Always return to the initial directory
        }
    });
}

const rootDir = process.argv.length>2 ? resolve(process.argv[2]) : resolve('./widgets'); // Ensure rootDir is an absolute path
console.log(`Searching for widget folders in rootDir '${rootDir}'`);

const subfolders = findDirectSubfolders(rootDir);
console.log('Widget folders found:', subfolders);

installInSubfolders(subfolders);

console.log('npm install completed in all direct subfolders.');
