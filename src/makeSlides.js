const makeSlides = file => {
  let images = file.images;
  let slideShow = [];
  let stop = false;

  slideShow.push(images[0]);
  images.splice(0, 1);
  console.log(images);
  console.log(slideShow);

  for (let i = 0; i < slideShow.length; i++) {
    /* Finding the next slide */
    for (let j = 0; j < images.length && !stop; j++) {
      for (let k = 0; k < images[j].numberOfTags && !stop; k++) {
        for (let l = 0; l < slideShow[i].numberOfTags && !stop; l++) {
          if (images[j].tags[k] === slideShow[i].tags[l]) {
            slideShow.push(images[j]);
            images.splice(j, 1);
            stop == true;
          }
        }
      }
    }
  }
};

//   const findImage = (tags, alignment) => {
//     for (let i = 0; i < images.length; i++) {
//       for (let j = 0; j < images[i].tags.length; j++) {
//         for (let k = 0; k < tags; k++) {
//           if (images[i].tags[j] === tags[k]) {
//             let returnedImage = images[i];
//             images.splice(i, 0);
//             console.log(returnedImage);
//             return returnedImage;
//           }
//         }
//       }
//     }
//   };
// };

module.exports = makeSlides;
