const fs = require('fs');
const path = require('path');

const outputRoot = path.join(process.cwd(), 'dist', 'ahc-website', 'browser');
const requiredFiles = [
  'index.html',
  '_headers',
  'robots.txt',
  'sitemap.xml',
  'google6f14947accd11826.html',
  'assets/i18n/en.json',
  'assets/i18n/ms.json',
  'assets/i18n/ta.json',
  'assets/i18n/ar.json',
  'assets/i18n/zh.json',
  'assets/images/favicon.png',
  'assets/images/amanah-halal-resources.png'
];

const missingFiles = requiredFiles.filter((file) => !fs.existsSync(path.join(outputRoot, file)));

if (missingFiles.length > 0) {
  console.error('Deployment output is missing required files:');
  for (const file of missingFiles) console.error(`- ${file}`);
  process.exit(1);
}

console.log('deployment output ok');
