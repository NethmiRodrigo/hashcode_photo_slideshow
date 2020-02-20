/* This solution is used only for data set e*/
const sort = require("./sortByTags");

const makeSlideshow = images => {
  let sortedImages = sort(images);

  let slideshow = [];

  /* The below code will combine vertical images with the least number of tags with images with most number of tags so that
  all slides will have almost equal number of tags */

  for (let i = 0; i < sortedImages.length / 2; i++) {
    let slide = {
      images: [],
      tags: []
    };
    image_a = sortedImages[i];
    image_b = sortedImages[sortedImages.length - 1 - i];
    slide.images.push(image_a);
    slide.images.push(image_b);
    image_a.tags.forEach(element => {
      slide.tags.push(element);
    });
    image_b.tags.forEach(element => {
      slide.tags.push(element);
    });
    slide.tags = [...new Set(slide.tags)];
    slideshow.push(slide);
  }

  return slideshow;

  /************************************************************************************************************************/
};

module.exports = makeSlideshow;
