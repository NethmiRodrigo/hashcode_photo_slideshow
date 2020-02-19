/* This solution is used only for data set b*/
const sort = require("./sortByTags");
const calScore = require("./helper/calculatePoints");

const makeSlideshow = file => {
  let sortedImages = sort(file.images);
  let score = calScore(sortedImages[2].tags, sortedImages[1].tags);
  console.log(score);
};

module.exports = makeSlideshow;
