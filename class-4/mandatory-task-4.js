const myPromise = new Promise((resolve, reject) => {
  const language = "Javascript";

  if ("Javascript" === language) {
    resolve("I am resolved");
  } else reject("I am rejected");
});

myPromise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);
