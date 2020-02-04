class File {
  constructor(numberOfImages, images) {
    this.numberOfImages = numberOfImages;
    this.images = images;
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
}

module.exports = File;
