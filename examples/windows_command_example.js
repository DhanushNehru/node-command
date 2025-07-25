const { run, runSync } = require('../index.js');

// Async example: List files and directories (Windows)
run('dir')
    .then(({ stdout }) => {
        console.log('Async Output (dir):\n', stdout);
    })
    .catch(({ err, stdout, stderr }) => {
        console.error('Async Error:\n', stderr || err);
    });

// Sync example: Display environment variables (Windows)
const syncResult = runSync('set');
if(syncResult.error) {
    console.error('Sync Error:\n', syncResult.stderr);
} else {
    console.log('Sync Output (set):\n', syncResult.stdout);
}