#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const generate = require('../mcs-engine.js');

const usage = `Usage: node cli/generate.js <json-file> <output-file>

Example:
  node cli/generate.js examples/gable.json gable.svg
`;

if (process.argv.length < 4) {
    console.log(usage);
    process.exit(1);
}

const inputFile = path.resolve(process.argv[2]);
const outputFile = path.resolve(process.argv[3]);

try {
    const config = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    const svg = generate(config);
    fs.writeFileSync(outputFile, svg);
    console.log(`✅ Generated ${outputFile}`);
} catch (e) {
    console.error('❌ Error:', e.message);
}
