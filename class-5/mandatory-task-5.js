function processArray(arr) {
  const splitData = arr.map((i) => {
    const [name, age] = i.split("-");
    return { name, age };
  });

  return splitData.filter((i) => i.age > 17);
}

const input = ["Zohan-25", "Wafi-17", "Saher-19"];
console.log(processArray(input));
// Output: [{ name: "Zohan", age: 25 }, { name: "Saher", age: 19 }]
