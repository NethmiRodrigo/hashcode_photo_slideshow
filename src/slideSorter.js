/* This solution is used only for data set b*/
const calScore = require("./helper/calculatePoints");

const makeSlideshow = sortedSlides => {
  // let score = calScore(sortedSlides[2].tags, sortedSlides[1].tags);
  let totalScore = 0;
  for (let i = 0; i < sortedSlides.length; i++) {
    let score = 0;
    let selectedSlideIndex;
    let maxScore = 0;
    for (j = i + 1; j < sortedSlides.length; j++) {
      score = calScore(sortedSlides[i].tags, sortedSlides[j].tags);
      let minNumOfTags = Math.min(
        sortedSlides[i].tags.length,
        sortedSlides[j].tags.length
      );
      if (score === minNumOfTags / 2) {
        maxScore = score;
        selectedSlideIndex = j;
        break;
      } else if (score > maxScore) {
        maxScore = score;
        selectedSlideIndex = j;
        continue;
      }
    }
    totalScore = totalScore + maxScore;
    if (score !== 0) {
      let selectedImage = sortedSlides.splice(selectedSlideIndex, 1);
      sortedSlides.splice(i + 1, 0, selectedImage[0]);
    }
    console.log("current score", totalScore);
  }
  console.log(totalScore);
  return sortedSlides;
};

module.exports = makeSlideshow;
