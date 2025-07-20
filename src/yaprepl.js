
// Yappacino REPL (Deno version)
console.log('Yappacino REPL v1.2.0 (Deno)');
console.log('Type Yappacino code and press Enter to evaluate. Type ".exit" to quit.');

const TMP_FILE = './__repl_tmp.yap';
const TMP_JS = './dist/__repl_tmp.js';

// Helper to read user input
async function prompt(question) {
  await Deno.stdout.write(new TextEncoder().encode('yapp> '));
  const buf = new Uint8Array(1024);
  const n = await Deno.stdin.read(buf);
  if (n === null) return null;
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

while (true) {
  const line = await prompt('yapp> ');
  if (line === null || line === '.exit') {
    break;
  }
  // Write to temp .yap file
  await Deno.writeTextFile(TMP_FILE, line);
  try {
    // Transpile using CLI (assumes index.yap is Deno compatible)
    const transpile = Deno.run({
      cmd: ['deno', 'run', '--allow-read', '--allow-write', 'src/index.js', TMP_FILE],
      stdout: 'null',
      stderr: 'piped',
    });
    const status = await transpile.status();
    if (!status.success) {
      const error = new TextDecoder().decode(await transpile.stderrOutput());
      console.error('Transpile error:', error);
      transpile.close();
      continue;
    }
    transpile.close();
    // Run transpiled JS
    const runJS = Deno.run({
      cmd: ['deno', 'run', '--allow-read', TMP_JS],
      stdout: 'piped',
      stderr: 'piped',
    });
    const output = new TextDecoder().decode(await runJS.output());
    const error = new TextDecoder().decode(await runJS.stderrOutput());
    if (output) Deno.stdout.write(new TextEncoder().encode(output));
    if (error) console.error(error);
    runJS.close();
  } catch (e) {
    console.error('Error:', e.message);
  }
}
// Cleanup
try { await Deno.remove(TMP_FILE); } catch {}
try { await Deno.remove(TMP_JS); } catch {}
console.log('Goodbye!');
