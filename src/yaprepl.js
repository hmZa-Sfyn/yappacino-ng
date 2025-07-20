#!/usr/bin/env node
// Yappacino REPL (Read-Eval-Print Loop)
const readline = require('readline');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Yappacino REPL v1.1.0');
console.log('Type Yappacino code and press Enter to evaluate. Type ".exit" to quit.');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'yapp> '
});

// Temporary file for evaluation
const TMP_FILE = path.join(__dirname, '__repl_tmp.yap');
const TMP_JS = path.join(__dirname, 'dist', '__repl_tmp.js');

rl.prompt();
rl.on('line', (line) => {
    if (line.trim() === '.exit') {
        rl.close();
        return;
    }
    // Write to temp .yap file
    fs.writeFileSync(TMP_FILE, line);
    // Transpile using CLI
    try {
        execSync(`bun run src/index.yap ${TMP_FILE}`);
        // Run transpiled JS
        const output = execSync(`node ${TMP_JS}`, { encoding: 'utf8' });
        process.stdout.write(output);
    } catch (e) {
        console.error('Error:', e.message);
    }
    rl.prompt();
}).on('close', () => {
    // Cleanup
    if (fs.existsSync(TMP_FILE)) fs.unlinkSync(TMP_FILE);
    if (fs.existsSync(TMP_JS)) fs.unlinkSync(TMP_JS);
    console.log('Goodbye!');
    process.exit(0);
});
