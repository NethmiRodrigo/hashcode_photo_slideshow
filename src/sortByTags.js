module.exports = images => {
  images.sort(function(a, b) {
    return b.tags.length - a.tags.length;
  });
  return images;
};
