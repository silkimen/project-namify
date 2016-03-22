#!/usr/bin/env node

var chalk = require('chalk');
var namify = require('./namify.js');

namify(function(error, name) {
  console.log(error || chalk.cyan('Your project\'s name is: ') + chalk.green(name));
})
