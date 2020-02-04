const readline = require("readline");
import File from "./file";
import Image from "./image";

const mapper = readStream => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let counter = 0;
  var file = new File();
  console.log("Crunching the numbers. Please wait!");

  //iteration
  rl.on("line", line => {
    //new instance of Image
    var image = new Image();
    if (line.length === 1) {
      file.setNumberOfImages(line);
    } else {
      counter++;
      let input = line.split(" ");
      image.setId(counter);
      image.setAlignment(input[0]);
      image.setNumberOfTags(input[1]);
      let tags = [];
      for (let i = 2; i < noOfTags + 2; i++) {
        let tag = input[i];
        tags.push(tag);
      }
      image.setTags(tags);
    }
    console.log(image);
  });
};

module.exports = mapper;
