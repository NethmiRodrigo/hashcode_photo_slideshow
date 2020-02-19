/* This solution is used only for data set b*/
const calScore = require("./helper/calculatePoints");

const makeSlideshow = sortedSlides => {
  // let score = calScore(sortedSlides[2].tags, sortedSlides[1].tags);
  let totalScore = 0;
  let selectedSlideIndex;
  for (let i = 0; i < sortedSlides.length; i++) {
    let score = 0;
    let maxScore = 0;
    for (j = i + 1; j < sortedSlides.length; j++) {
      if (sortedSlides[j].tags.length < 2 * maxScore) {
        continue;
      }
      score = calScore(sortedSlides[i].tags, sortedSlides[j].tags);
      if (score > maxScore) {
        maxScore = score;
        selectedSlideIndex = j;
        continue;
      }
    }
    totalScore = totalScore + maxScore;
    let selectedImage = sortedSlides.splice(selectedSlideIndex, 1);
    sortedSlides.splice(i + 1, 0, selectedImage[0]);
    console.log("current score", totalScore);
  }
  console.log(totalScore);
};

module.exports = makeSlideshow;
