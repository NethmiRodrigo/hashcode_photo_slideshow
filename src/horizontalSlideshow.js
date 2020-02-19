/* This solution is used only for data set b*/
const sort = require("./sortByTags");
const calScore = require("./helper/calculatePoints");

const makeSlideshow = file => {
  let sortedImages = sort(file.images);
  // let score = calScore(sortedImages[2].tags, sortedImages[1].tags);
  let totalScore = 0;
  let slide = [];
  let selectedImageIndex;
  for (let i = 0; i < sortedImages.length; i++) {
    let score = 0;
    let maxScore = 0;
    if (i === 0) {
      slide.push(sortedImages[i]);
      continue;
    } else {
      for (j = i + 1; j < sortedImages.length; j++) {
        console.log(sortedImages[i]);
        console.log(sortedImages[j].tags);
        score = calScore(sortedImages[i].tags, sortedImages[j].tags);
        // if (sortedImages[j].numberOfTags < 2 * maxScore) {
        //   continue;
        // }
        if (score > maxScore) {
          maxScore = score;
          selectedImageIndex = j;
          continue;
        }
      }
      slide.push(sortedImages[selectedImageIndex]);
      totalScore = totalScore + maxScore;
      let selectedImage = sortedImages.splice(selectedImageIndex, 1);
      sortedImages.splice(i + 1, 0, selectedImage);
      console.log("current score", totalScore);
    }
  }
  console.log(totalScore);
};

module.exports = makeSlideshow;
