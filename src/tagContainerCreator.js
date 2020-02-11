const tagContainerCreator = file => {
  const tagContainer = new Map();
  let images = file.getImages();
  let allTags = file.getAllTags();

  allTags.forEach(tag => {
    let taggedImages = [];

    images.forEach(image => {
      if (image.tags.includes(tag)) {
        taggedImages.push(image);
      }
    });

    tagContainer.set(tag, taggedImages);
  });

  console.log(tagContainer);
};

module.exports = tagContainerCreator;
