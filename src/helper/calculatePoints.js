module.exports = (slideOneTags, slideTwoTags) => {
  let intersection = slideOneTags.filter(x => slideTwoTags.includes(x));
  let differenceA = slideOneTags.filter(x => !slideTwoTags.includes(x));
  let differenceB = slideTwoTags.filter(x => !slideOneTags.includes(x));
  return Math.min(intersection.length, differenceA.length, differenceB.length);
};
