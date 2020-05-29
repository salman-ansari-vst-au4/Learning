
let samplePromise = new Promise((resolve, reject) => {
  let flag = true;

  if (flag) {
    resolve('Done');
  }
  else {
    reject('Rejected');
  }

})

samplePromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  })

// Promise.all take array of promises and return when all of them are resolved
// Promise.race take array of promises and retun when any one of them are resolved 