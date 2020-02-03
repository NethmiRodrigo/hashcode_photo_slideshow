const Image = require("./Image");
const File = require("./File");

const image1 = new Image("H", 6, ["Stripper", "Sex"]);
const image2 = new Image("V", 9, ["Bang", "Fuck"]);

const newFile = new File(2, [image1, image2]);

console.log(newFile);

console.log(image1);