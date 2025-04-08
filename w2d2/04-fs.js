// Filesystem

// NTFS / FAT32 / FAT16 / ExFAT / HFS / APFS


const fs = require("fs") // 0 - Require fs so we can do readFile and writeFile


const someCoolText = "Wiggle wiggle yeah yeah! 🐔🐔🐔🥔🥔🥔🥔🔥🔥🔥🔥" // 1- Define the new string to add
let currentContent = "" // 2 - Define a currentContent with empty string


// 3 - Call readFile, and we will do the callback once we're done reading the file
fs.readFile("./randomText.txt", {encoding:"utf8"},(err, data) => {
  // When will this happen?
  // Async callbacks will always execute once everything synchronous has been done
  // Will either be step 7 or 8
  console.log(err, data)
  currentContent = data
})


console.log("About to write to a file") // 4 - Log the message to the console

// 5 - Call writeFile to write the content data + someCoolText
fs.writeFile("./randomText.txt", currentContent + someCoolText, () => {
  // Will either be step 7 or 8
  console.log("Done writing to a file")
})

// 6 - Every synchronous functions have been called