// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
let text = "";
fs.readFile("text.txt", (err,data)=> {
    text = data.toString().split(' ').filter((word) => word != "").join(' ').trim();
    console.log(text);
    fs.writeFile("text.txt", text , ()=> {
    console.log("Done!!");
})

})
