const readline = require("readline");
const Image = require("./entities/image");
const File = require("./entities/file");

let allTags = [];

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
        allTags.push(input[i]);
      }
      image.setTags(tags);
      imageArray.push(image);
      counter++;
    }
  });

  rl.on("close", function() {
    allTags = Array.from(new Set(allTags));
    file.setImages(imageArray);
    file.setTags(allTags);
    console.log(file);
    console.log(file.images);
    console.log(file.tags);
  });
};

module.exports = mapper;
