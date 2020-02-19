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
    console.log("Image pushed", image.id);
  });

  console.log(tagContainer);
<<<<<<< Updated upstream:src/tagContainerCreator.js
=======

  return tagContainer;
>>>>>>> Stashed changes:src/helper/tagContainerCreator.js
};

module.exports = tagContainerCreator;
