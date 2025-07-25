const { run, runSync } = require('../index.js');

// Async example: List files and directories (macOS/Linux)
run('ls -la')
    .then(({ stdout }) => {
        console.log('Async Output (ls -la):\n', stdout);
    })
    .catch(({ err, stdout, stderr }) => {
        console.error('Async Error:\n', stderr || err);
    });

// Sync example: Display environment variables (macOS/Linux)
const syncResult = runSync('printenv');
if(syncResult.error) {
    console.error('Sync Error:\n', syncResult.stderr);
} else {
    console.log('Sync Output (printenv):\n', syncResult.stdout);
}