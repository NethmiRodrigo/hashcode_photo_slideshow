class Image {
  constructor(id, alignment, numberOfTags, tags) {
    this.id = id;
    this.alignment = alignment;
    this.numberOfTags = numberOfTags;
    this.tags = tags;
  }

  getNumberOfTags() {
    return this.numberOfTags;
  }

  getAlignment() {
    return this.alignment;
  }

  getId() {
    return this.id;
  }

  getTags() {
    return this.tags;
  }

  setAlignment(alignment) {
    this.alignment = alignment;
  }

  setId(id) {
    this.id = id;
  }

  setTags(tags) {
    this.tags = tags;
  }

  setNumberOfTags(numberOfTags) {
    this.numberOfTags = numberOfTags;
  }
}

module.exports = Image;
