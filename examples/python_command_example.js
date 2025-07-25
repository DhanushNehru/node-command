const { run, runSync } = require('../index');

const pythonVersionCmd = 'python --version';  // or 'python3 --version' if needed
const pythonCommand = 'python -c "print(\'Hello from Python\')"';

// Async example: print Python version, then run Python command
(async () => {
    try {
        const { stdout: versionStdout } = await run(pythonVersionCmd);
        console.log('Async Python Version:', versionStdout.trim());

        const { stdout: commandStdout } = await run(pythonCommand);
        console.log('Async Python Command Output:', commandStdout.trim());
    } catch ({ err, stdout, stderr }) {
        console.error('Async Python Error:', stderr || err);
    }
})();

// Sync example: print Python version, then run Python command
const versionResult = runSync(pythonVersionCmd);
if (versionResult.error) {
    console.error('Sync Python Version Error:', versionResult.stderr);
} else {
    console.log('Sync Python Version:', versionResult.stdout.trim());
}

const commandResult = runSync(pythonCommand);
if (commandResult.error) {
    console.error('Sync Python Command Error:', commandResult.stderr);
} else {
    console.log('Sync Python Command Output:', commandResult.stdout.trim());
}
