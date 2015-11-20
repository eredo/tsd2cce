'use strict';

const Parser = require('./src/parser').Parser;
const Writer = require('./src/writer').Writer;
const readFileSync = require('fs').readFileSync;
const writeFileSync = require('fs').writeFileSync;

let argv = require('optimist')
  .options({
    strict: {
      alias: 's',
      default: true
    }
  })
  .boolean('strict')
  .usage('Usage: ts2cee [definition file] [externs file]')
  .demand(2)
  .argv;


let parser = new Parser(argv._[0], readFileSync(argv._[0]).toString());
let writer = new Writer(parser.ast, {
  strict: argv.strict
});

writeFileSync(argv._[1], writer.toCode());
