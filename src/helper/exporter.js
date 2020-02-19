const fs = require("fs");

module.exports = (filename, slides) => {
  fs.appendFile(`../output/${filename}.out`, slides.length + "\n", function(
    error
  ) {
    if (error) return console.log(error);

    for (let i = 0; i < slides.length; i++) {
      let line = [];
      for (let j = 0; j < slides[i].images.length; j++) {
        line.push(slides[i].images[j].id);
      }
      fs.appendFile(
        `../output/${filename}.out`,
        line.join(" ") + "\n",
        function(error) {
          if (error) return console.log(error);
        }
      );
    }
  });
};
