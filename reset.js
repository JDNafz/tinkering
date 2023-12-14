const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "alreadyFound.txt");
// Write to the file asynchronously
fs.writeFile(filePath, "false", "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  // console.log("File has been written successfully!");
});