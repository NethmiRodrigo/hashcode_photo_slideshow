const readline = require("readline");
const Image = require("./image");
const File = require("./file");

const mapper = readStream => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let counter = 0;
  let imageArray = [];
  //new instance of File
  var file = new File();
  console.log("Crunching the numbers. Please wait!");

  //iteration
  rl.on("line", line => {
    if (line.length === 1) {
      file.setNumberOfImages(line);
    } else {
      //new instance of Image
      var image = new Image();
      let tags = new Array();
      let input = line.split(" ");
      let noOfTags = parseInt(input[1], 10);
      image.setId(counter);
      image.setAlignment(input[0]);
      image.setNumberOfTags(input[1]);
      for (i = 2; i < noOfTags + 2; i++) {
        tags.push(input[i]);
      }
      image.setTags(tags);
      imageArray.push(image);
      console.log(imageArray);
      counter++;
    }
  });
  file.setImages(imageArray);
  console.log(imageArray);
};

module.exports = mapper;
