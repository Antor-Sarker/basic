function cleanUpString(str) {
  let cleanUp = str;

  while (cleanUp.includes("white")) {
    cleanUp = cleanUp.replace("white", "red");
  }

  if (!cleanUp.includes("white")) {
    return cleanUp.trim();
  }
}

console.log(cleanUpString("   white is white   ")); // Output: red is red
