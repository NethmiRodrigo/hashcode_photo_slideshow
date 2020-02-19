/* This solution is used only for data set b*/
const sort = require("./sortByTags");
const calScore = require("./helper/calculatePoints");

const makeSlideshow = file => {
  let sortedImages = sort(file.images);
<<<<<<< HEAD
=======
  // let score = calScore(sortedImages[2].tags, sortedImages[1].tags);
  let maxScore = 0;
  let totalScore = 0;
  let slide = [];
  let solutionIndex = [];
  for (let i = 0; i < sortedImages.length; i++) {
    let tags = sortedImages[i].tags;
    let score = calScore(sortedImages[i].tags, sortedImages[i + 1].tags);
  }
  console.log(score);
>>>>>>> Neith
};

module.exports = makeSlideshow;
