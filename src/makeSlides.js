const makeSlides = file => {
  let images = file.getImages();
  let slide = [];
  let nextTags = [];
  let verticalArray = [];
  let lengthOfaArray = images.length;

  while (slide.length !== lengthOfaArray) {
    for (let i = 0; i < images.length; i++) {
      if (nextTags.length !== 0 && i === 0) {
        let tags = images[i].tags;
        for (let j = 0; j < tags.length; j++) {
          let tag = tags[j];
          if (nextTags.includes(tag)) {
            console.log(tag);
          }
        }
        for (let p = 0; p > tags.length; p++) {
          console.log("P", tags[p]);
          if (nextTags.includes(tags[p])) {
            if (verticalArray.length === 1) {
              if (images[i].alignment === "V") {
                verticalArray.push(images[i]);
                verticalArray.forEach(img => {
                  slide.push(img);
                });
                verticalArray.splice(0, 2);
                nextTags = images[i].tags;
                break;
              } else break;
            } else if (images[i].alignment === "H") {
              slide.push(images[i]);
              nextTags = images[i].tags;
              break;
            } else {
              verticalArray.push(images[i]);
              nextTags = images[i].tags;
              break;
            }
          }
        }
      }
      if (i === 0 && nextTags.length === 0) {
        //If the first image is a horizontal image, pushes that image to the slide array and sets the next possible tags as its tags
        if (images[i].alignment === "H") {
          slide.push(images[i]);
          nextTags = images[i].tags;
        }

        //If the first image is vertical, pushes that image to a seperate array and sets the next possible tags
        else if (images[i].alignment === "V") {
          verticalArray.push(images[i]);
          nextTags = images[i].tags;
        }
      } else if (i !== 0) {
        let tags = images[i].tags;
        for (let l = 0; l < tags.length; l++) {
          //If it isn't the first image, checks if any of its tags matches the tags in the nextTags array
          if (nextTags.includes(tags[l])) {
            //If a tag is found, checks if there is a vertical image waiting to be found
            if (verticalArray.length === 1) {
              if (images[i].alignment === "V") {
                verticalArray.push(images[i]);

                //If the image is a vertical image, pushes it to the vertical array, and pushes the vertical array to slide and then
                //empties the vertical array, then breaks the loop inside the tags array
                verticalArray.forEach(img => {
                  slide.push(img);
                });
                verticalArray.splice(0, 2);
                nextTags = images[i].tags;
                break;
              }

              //If there is a vertical image waiting to be found, and if the image found with a matching tag is horizontal, breaks loop
              //to go other image
              else break;
            }

            //If a vertical image isn't waiting to be found, checks if the image is horizontal and pushes it to slide, and breaks the tags loop
            else if (images[i].alignment === "H") {
              slide.push(images[i]);
              nextTags = images[i].tags;
              break;
            }

            //If there is no vertical image to be found, if the image is vertical, pushes it to seperate array and breaks tags loop
            else {
              verticalArray.push(images[i]);
              nextTags = images[i].tags;
              break;
            }
          }
        }
      }
    }

    if (verticalArray.length !== 0) {
      console.log("Vertical array", verticalArray);
      // let index = images.indexOf(verticalArray[0]);
      // images.splice(index, 1);
    }

    //after a complete loop through the image array, deletes the images from the image array that has been put into a slice

    slide.forEach(slide => {
      if (images.includes(slide)) {
        let index = images.indexOf(slide);
        images.splice(index, 1);
      }
    });
  }
  console.log("Slide", slide);
};

// let slideShow = [];
// let stop = false;

// slideShow.push(images[0]);
// images.splice(0, 1);

// for (let i = 0; i < slideShow.length; i++) {
//   /* Finding the next slide */
//   for (let j = 0; j < images.length && !stop; j++) {
//     console.log("J->", j);
//     for (let k = 0; k < images[j].numberOfTags && !stop; k++) {
//       for (let l = 0; l < slideShow[i].numberOfTags && !stop; l++) {
//         if (images[j].tags[k] === slideShow[i].tags[l]) {
//           slideShow.push(images[j]);
//           images.splice(j, 1);
//           stop = true;
//         }
//       }
//     }
//   }
// }

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
