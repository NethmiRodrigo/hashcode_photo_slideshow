const readline = require("readline");
const h_show = require("./horizontalSlides");
const v_show = require("./verticalSlides");
const slideSorter = require("../slideSorter");
const exporter = require("./exporter");

const mapper = (filename, readStream) => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let counter = 0;

  let verticalArray = [];
  let horizontalArray = [];
  let verticalSlides = [];
  let horizontalSlides = [];
  let allSlides = [];

  console.log("Crunching the numbers. Please wait!");

  rl.on("line", line => {
    let input = line.split(" ");
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
    }

    if (image.alignment === "H") {
      horizontalArray.push(image);
    } else if (image.alignment === "V") {
      verticalArray.push(image);
    }
    counter++;
  });

  rl.on("close", function() {
    if (horizontalArray.length !== 0 && verticalArray.length !== 0) {
      horizontalSlides = h_show(horizontalArray);
      verticalSlides = v_show(verticalArray);
      allSlides = horizontalArray;
      verticalSlides.forEach(element => {
        allSlides.push(element);
      });
    } else if (horizontalArray.length !== 0) {
      horizontalSlides = h_show(horizontalArray);
      allSlides = horizontalSlides;
    } else if (verticalArray.length !== 0) {
      verticalSlides = v_show(verticalArray);
      allSlides = verticalSlides;
    }
    let sortedSlides = slideSorter(allSlides);
    exporter(filename, sortedSlides);
  });
};

module.exports = mapper;
