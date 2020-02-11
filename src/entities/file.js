class File {
  constructor(numberOfImages, images, allTags) {
    this.numberOfImages = numberOfImages;
    this.images = images;
    this.allTags = allTags;
  }

  getNumberOfImages() {
    return this.numberOfImages;
  }

  getImages() {
    return this.images;
  }

  setNumberOfImages(numberOfImages) {
    this.numberOfImages = numberOfImages;
  }

  setImages(images) {
    this.images = images;
  }

  getAllTags() {
    return this.allTags;
  }

  setAllTags(allTags) {
    this.allTags = allTags;
  }
}

module.exports = File;
