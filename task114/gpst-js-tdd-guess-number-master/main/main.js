const fs = require('fs');
module.exports = function main() {
    process.stdin.pause();
    const buf = Buffer.allocUnsafe(10000);
    fs.readSync(process.stdin.fd, buf, 0, 10000, 0);
    process.stdin.end();
    let line=buf.toString('utf8', 0, 4).trim();
    return line;
};