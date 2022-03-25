/** @format */

let p = new Promise((resolve, reject) => {
  let a = 1 + 1; // resolve or reject criteria

  if (a == 2) {
    resolve("Success"); // if resolve method is called - returns what is in resolve, can be expression
  } else {
    reject("Fail"); // else reject method is called - returns what is in reject
  }
});

p.then((message) => {
  console.log("this is in the then" + message); // promise is object containing then -> or the resolve return
}).catch((message) => {
  console.log("this is in the catch" + message); // or if reject -> catch contains the reject return
});
