#!/usr/bin/env node
// Yappacino Package Manager (yapm)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function usage() {
    console.log(`Yappacino Package Manager (yapm)
Usage:
  yapm init                # Initialize a new yap project
  yapm new <name>          # Create a new yap project in <name> folder
  yapm transpile           # Transpile all .yap files to .js
  yapm fix-imports         # Fix imports in .yap files
  yapm retro-init          # Initialize retro.exe integration
  yapm install <pkg>       # Install a package
  yapm uninstall <pkg>     # Uninstall a package
`);
}

function initProject() {
    if (fs.existsSync('package.yap.json')) {
        console.log('Project already initialized.');
        return;
    }
    fs.writeFileSync('package.yap.json', JSON.stringify({
        name: path.basename(process.cwd()),
        version: '1.0.0',
        dependencies: {}
    }, null, 2));
    fs.mkdirSync('src', { recursive: true });
    fs.writeFileSync('src/main.yap', '// Entry point\n');
    console.log('Initialized new Yappacino project.');
}

function newProject(name) {
    if (!name) return usage();
    fs.mkdirSync(name);
    process.chdir(name);
    initProject();
}

function transpile() {
    // Transpile all .yap files in src/ to .js using your transpiler
    if (!fs.existsSync('src')) return console.log('No src directory found.');
    const files = fs.readdirSync('src').filter(f => f.endsWith('.yap'));
    files.forEach(f => {
        console.log(`Transpiling ${f}...`);
        execSync(`bun run src/index.yap src/${f}`); // Assumes bun and your transpiler
    });
    console.log('Transpilation complete.');
}

function fixImports() {
    // Fix imports in .yap files (simple simulation)
    if (!fs.existsSync('src')) return console.log('No src directory found.');
    const files = fs.readdirSync('src').filter(f => f.endsWith('.yap'));
    files.forEach(f => {
        let content = fs.readFileSync(path.join('src', f), 'utf8');
        content = content.replace(/connotate/g, 'import').replace(/derives/g, 'from');
        fs.writeFileSync(path.join('src', f), content);
    });
    console.log('Imports fixed.');
}

function retroInit() {
    const userBin = path.join(process.env.USERPROFILE || process.env.HOME, '.yappacino', 'bin');
    fs.mkdirSync(userBin, { recursive: true });
    const retroSrc = path.join('.wintools', 'retro.exe');
    const retroDest = path.join(userBin, 'retro.exe');
    if (!fs.existsSync(retroSrc)) {
        console.log('retro.exe not found in .wintools.');
        return;
    }
    fs.copyFileSync(retroSrc, retroDest);
    console.log(`retro.exe copied to ${retroDest}`);
    // Optionally, add userBin to PATH (user must restart shell)
    console.log('Add the following to your PATH if not already present:');
    console.log(userBin);
}

function installPkg(pkg) {
    if (!pkg) return usage();
    try {
        execSync(`retro install ${pkg}`, { stdio: 'inherit' });
    } catch (e) {
        console.log('Failed to install package:', e.message);
    }
}

function uninstallPkg(pkg) {
    if (!pkg) return usage();
    try {
        execSync(`retro uninstall ${pkg}`, { stdio: 'inherit' });
    } catch (e) {
        console.log('Failed to uninstall package:', e.message);
    }
}

const args = process.argv.slice(2);
if (args.length === 0) usage();
else if (args[0] === 'init') initProject();
else if (args[0] === 'new') newProject(args[1]);
else if (args[0] === 'transpile') transpile();
else if (args[0] === 'fix-imports') fixImports();
else if (args[0] === 'retro-init') retroInit();
else if (args[0] === 'install') installPkg(args[1]);
else if (args[0] === 'uninstall') uninstallPkg(args[1]);
else usage();
