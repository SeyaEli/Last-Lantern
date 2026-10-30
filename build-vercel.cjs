// Publish the self-contained offline game as the default static homepage.
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const source = path.join(root, 'Last-Lantern.html');
if (!fs.existsSync(source)) throw new Error('Last-Lantern.html must be beside build-vercel.cjs. Check the Vercel Root Directory setting.');
const output = path.join(root, 'public');
fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(source, path.join(output, 'index.html'));
console.log('Published Last Lantern to public/index.html');
