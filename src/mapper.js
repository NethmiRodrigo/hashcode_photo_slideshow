const readline = require("readline");

const mapper = readStream => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let counter = 0;

  console.log("Crunching the numbers");

  //iteration
  rl.on("line", line => {
    console.log(`Line from file: ${line}`);
  });
};

module.exports = mapper;
