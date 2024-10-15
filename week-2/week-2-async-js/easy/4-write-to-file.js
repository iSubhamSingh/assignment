// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

try {
    fs.writeFile("text.txt", "this shoule be written to the file ", ()=> {
        console.log("success");
        
});
} catch (error) {
    console.log("Error: couldn't write to file");
    
}

