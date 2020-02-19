const makeHorizontalSlides = sortedImages => {
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
  return slideshow;
};

module.exports = makeHorizontalSlides;
