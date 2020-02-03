const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let file;

rl.question('Input file name ', (answer) => {

    console.log(`Reading file name: ${answer}`);
    file=answer;
    var readStream = fs.createReadStream(`../test_data/${file}.txt`, 'utf8');
  rl.close();
});
