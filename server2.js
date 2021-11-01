const { appendFile} = require("fs");

const newContent = "\nThis is some more new text";

appendFile('hi.txt', newContent, (err) => {
    if (err) {
        console.error(err)
        return;
    }
});

/*try {
    writeFileSync("hi.txt", newContent);
    console.log("Content written!");
}   catch (err) {
    console.error(err);
}


writeFile("hi.txt", newContent, {flag: "a" }, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Content written!")
});
*/