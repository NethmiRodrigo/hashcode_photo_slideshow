const readline = require("readline");
const h_show = require("./horizontalSlideshow");
const tagContainerCreator = require("./helper/tagContainerCreator");

const mapper = readStream => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let counter = 0;

  let file = {
    numberOfImages: 0,
    images: [],
    allTags: []
  };

  console.log("Crunching the numbers. Please wait!");

  rl.on("line", line => {
    let input = line.split(" ");
    if (counter == 0) {
      file.numberOfImages = parseInt(input[0], 10);
    } else {
      let image = {
        id: 0,
        alignment: "",
        numberOfTags: 0,
        tags: []
      };

      image.id = counter - 1;
      image.alignment = input[0];
      image.numberOfTags = parseInt(input[1], 10);

      for (i = 2; i < image.numberOfTags + 2; i++) {
        image.tags.push(input[i]);
        file.allTags.push(input[i]);
      }

      file.images.push(image);
    }
    counter++;
  });

  rl.on("close", function() {
    file.allTags = Array.from(new Set(file.allTags));
    tagContainerCreator(file);
    // h_show(file);
  });
};

module.exports = mapper;
