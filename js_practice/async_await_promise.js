/** @format */

// Promise info for reminder
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1; // resolve or reject criteria

//   if (a == 2) {
//     resolve("Success"); // if resolve method is called - returns what is in resolve, can be expression
//   } else {
//     reject("Fail"); // else reject method is called - returns what is in reject
//   }
// });

// p.then((message) => {
//   console.log("this is in the then" + message); // promise is object containing then -> or the resolve return
// }).catch((message) => {
//   console.log("this is in the catch" + message); // or if reject -> catch contains the reject return
// });

let isWorking = true;

console.log("ok");

function aFunc() {
  return new Promise((resolve, reject) => {
    console.log("Starting async request attempt");
    if (isWorking) {
      resolve("Request Data Is Right Here Bud");
    } else {
      reject(console.log("Request failed"));
    }
  });
}

function bFunc(response) {
  return new Promise((resolve, reject) => {
    console.log("Handling results");
    resolve(`Response query: ${response}`);
  });
}

async function requestHandler() {
  try {
    console.log("requestHandler called");
    let aResult = await aFunc(); // Dont really need to set to var, these func run console, but pretending
    console.log("Response received");
    let bResult = await bFunc(aResult); // Dont really need to set to var, these func run console, but pretending
    console.log(`Final Result: ${bResult}`);
  } catch (err) {
    console.log(err);
  }
}

requestHandler();
