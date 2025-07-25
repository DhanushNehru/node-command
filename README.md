# node-command

> Simple and robust Node.js utility to run shell commands asynchronously and synchronously

`node-command` provides a straightforward API to execute system commands from Node.js using both asynchronous Promises (with optional callbacks) and synchronous calls. It handles errors gracefully and returns both stdout and stderr outputs.

---

## Features

- Run shell commands **asynchronously** with Promise and optional callback style
- Run shell commands **synchronously** with detailed error and output info
- Returns both `stdout` and `stderr` regardless of errors
- Minimal dependency (built on Node's native `child_process`)
- Easy to integrate in scripts and CLI tools
- Supports runtime options (like `cwd`, `env`) for flexibility

---

## Installation

```
npm install node-command
```

## Usage

```javascript
const nodeCmd = require('node-command');
// or, if using ESM:
// import * as nodeCmd from 'node-command';

// Asynchronous usage (Promise + optional callback)
const command = 'ls -la';

nodeCmd.run(command)
.then(({ stdout, stderr }) => {
console.log('Output:', stdout);
if (stderr) console.error('Errors:', stderr);
})
.catch(({ err, stdout, stderr }) => {
console.error('Command failed:', err);
console.log('Partial output:', stdout);
console.error('Errors:', stderr);
});

// With optional callback:
nodeCmd.run(command, (err, stdout, stderr) => {
if (err) {
console.error('Callback error:', stderr);
} else {
console.log('Callback output:', stdout);
}
});

// Synchronous usage
const result = nodeCmd.runSync('ls -la');

if (result.error) {
console.error('Sync command failed:', result.stderr);
} else {
console.log('Sync command output:', result.stdout);
}
```

## Contributing

Contributions and suggestions are welcome! Please open issues or pull requests.