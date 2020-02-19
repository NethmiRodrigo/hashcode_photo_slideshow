const sort = require("./sortByTags");

const makeHorizontalSlides = images => {
  let sortedImages = sort(images);
  let slideshow = [];

  for (let i = 0; i < sortedImages.length; i++) {
    let slide = {
      images: [],
      tags: []
    };
    slide.images.push(sortedImages[i]);
    sortedImages[i].tags.forEach(tag => {
      slide.tags.push(tag);
    });
    slideshow.push(slide);
  }
  console.log("Horizontal slideshow length", slideshow.length);
  return slideshow;
};

module.exports = makeHorizontalSlides;
