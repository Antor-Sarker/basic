function handleError() {
  throw new Error("make error");
}

try {
  handleError();
} catch (error) {
  console.log("I have handled the error successfully.");
}
