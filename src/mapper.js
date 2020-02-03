const readline = require("readline");

const mapper = readStream => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let counter = 0;
  let images = [];
  let numOfImages = 0;
  let imageID = 1;

  console.log("Crunching the numbers");

  //iteration
  rl.on("line", line => {
    console.log(`Line from file: ${line}`);
    if (line.length === 1) {
      numOfImages = parseInt(line, 10);
    }
    else {
      let input = line.split(" ");
      let noOfTags = parseInt(input[1], 10);
      let tags = [];
      for ( let i = 2; i < (noOfTags + 2); i++) {
        let tag = input[i];
        tags.push(tag);
      };
      images.push({
        imageID: imageID,
        alignment: input[0],
        noOfTags: noOfTags,
        tags: tags
      });
      imageID ++ ;
    }
    console.log(images);
  })

};

module.exports = mapper;
