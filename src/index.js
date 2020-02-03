const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let file;

rl.question('Input file name ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Reading file name: ${answer}`);
  file=answer;
  try {  
    var data = fs.readFileSync(`../test_data/${file}.txt`, 'utf8');
    console.log(typeof data);
    console.log(data); 
} catch(e) {
    console.log('Error:', e.stack);
}
  rl.close();
});

