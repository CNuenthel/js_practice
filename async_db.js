/** @format */

data = {
  cody: {
    name: "cody",
    age: "31",
    gender: "male?",
    food: "spaghetti",
    color: "green",
  },
  bernie: {
    name: "bernie",
    age: "14",
    gender: "mail",
    food: "cat",
    color: "whoknowsman",
  },
};

// Search by name function
function getDataByName(name) {
  console.log(`Searching DB for ${name}`);
  for (const n in data) {
    if (n === name.toLowerCase()) {
      console.log(`${name} found!`);
      return data[n];
    }
  }
  return `${name} was not found in the DB`;
}

// Search for multiple names and return results
async function getMultipleByName(...args) {
  const results = [];

  for (let i = 0; i < args.length; i++) {
    try {
      results.push(await getDataByName(args[i]));
    } catch (err) {
      console.log(`Unable to locate ${args[i]}`);
      throw err;
    }
  }
  return results;
}

// Function handler because wtf why not more practice on syntax
async function funcCaller(func, ...args) {
  try {
    let results = await func(...args);
    console.log(results);
  } catch (err) {
    console.log(results);
    throw err;
  }
}

// If you run into a situation where there is an unhandled promise, you can
// run through your async functions, or promise returning functions one by one
// to find the one that is chaining the unhandled promise

funcCaller(getMultipleByName, "cody", "bernie");
