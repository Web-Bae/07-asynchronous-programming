function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Log "Data fetched!" to the console
      console.log("Data fetched!");
      // Invoke the resolve function
      resolve();
    }, 1000);
  });
}

function processDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data processed!");
      resolve();
    }, 500);
  });
}

function displayData() {
  console.log("Data displayed!");
}

/**
 * Use the functions above to log the following in otder to the console:
 *
 * "Data fetched!"
 * "Data processed!"
 * "Data displayed!"
 *
 * Use .then() and .catch() to chain promises
 *
 *  */
fetchDataPromise()
  .then(() => processDataPromise())
  .then(() => displayData())
  .catch((error) => console.error(error));
