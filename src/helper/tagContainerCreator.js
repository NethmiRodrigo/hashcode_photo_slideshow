const tagContainerCreator = file => {
  let tagContainer = {};
  let images = file.images;
  let allTags = file.allTags;
  images.forEach(image => {
    let tags = image.tags;
    let tagsPushed = Object.keys(tagContainer);
    tags.forEach(tag => {
      if (tagsPushed.includes(tag)) {
        tagContainer[tag].push(image);
      } else {
        tagContainer[tag] = [];
        tagContainer[tag].push(image);
        tagsPushed.push(tag);
      }
    });
  });

  console.log(tagContainer);

  return tagContainer;
};

module.exports = tagContainerCreator;
