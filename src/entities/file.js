class File {
  constructor(numberOfImages, images, tags) {
    this.numberOfImages = numberOfImages;
    this.images = images;
    this.tags = tags;
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

  getTags() {
    return this.tags;
  }

  setTags(tags) {
    this.tags = tags;
  }
}

module.exports = File;
