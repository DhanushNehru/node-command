const { exec, execSync } = require('child_process');

/**
 * Run a command asynchronously.
 * @param {string} command - Command to run.
 * @param {Object} [options] - Exec options.
 * @param {function} [callback] - Optional callback(err, stdout, stderr).
 * @returns {Promise<{ stdout: string, stderr: string }>}
 */
function run(command, options, callback) {
    // options is optional
    if (typeof options === 'function') {
        callback = options;
        options = undefined;
    }
    return new Promise((resolve, reject) => {
        exec(command, options, (err, stdout, stderr) => {
            if (callback) callback(err, stdout, stderr);
            if (err) {
                // Still resolve with output, make error information available
                return reject({err, stdout, stderr});
            }
            resolve({ stdout, stderr });
        });
    });
}

/**
 * Run a command synchronously.
 * @param {string} command - Command to run.
 * @param {Object} [options] - ExecSync options.
 * @returns {{ stdout: string, stderr: string, error: Error|null }}
 */
function runSync(command, options) {
    try {
        const stdout = execSync(command, { ...options }).toString();
        return { stdout, stderr: '', error: null };
    } catch (error) {
        // Include any partial output available
        return {
            stdout: error.stdout ? error.stdout.toString() : '',
            stderr: error.stderr ? error.stderr.toString() : '',
            error
        };
    }
}

module.exports = {
    run,
    runSync
};
