const readline = require("readline");
const Image = require("./entities/image");
const File = require("./entities/file");
const tagContainerCreator = require("./tagContainerCreator");
const createSlideShow = require("./createSlideShow");

let allTags = [];
//let tagContainer = new Map();

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

  //iterated through every line of the file and maps data to objects
  rl.on("line", line => {
    let input = line.split(" ");
    if (counter == 0) {
      file.setNumberOfImages(parseInt(input[0], 10));
    } else {
      //new instance of Image
      var image = new Image();
      let tags = new Array();
      let noOfTags = parseInt(input[1], 10);
      image.setId(counter);
      image.setAlignment(input[0]);
      image.setNumberOfTags(noOfTags);
      for (i = 2; i < noOfTags + 2; i++) {
        tags.push(input[i]);
        allTags.push(input[i]);
      }
      image.setTags(tags);
      imageArray.push(image);
    }
    counter++;
  });

  //runs once the end of the file is reached
  rl.on("close", function() {
    allTags = Array.from(new Set(allTags));
    file.setImages(imageArray);
    file.setAllTags(allTags);
    console.log(file);
    //tagContainer = tagContainerCreator(file);
    //createSlideShow(tagContainer);
  });
};

module.exports = mapper;
