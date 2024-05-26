// new Promise((resolve,reject)=>{
//     if(){
//         reject()
//     }
//     resolve()

// })

const fakePromiseRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (rand > 3500) {
        resolve("This is Your Fake Data");
      }
      reject("Connection Timed Out :(");
    }, 1000);
  });
};

let count = 1;
fakePromiseRequest("/test")
  .then((output) => {
    console.log(`Hurray It Worked!!! at #${count}`);
    console.log(`data: ${output}`);
    return fakePromiseRequest("/test/one");
  })
  .then((output) => {
    count++;
    console.log(`Hurray It Worked!!! at #${count}`);
    console.log(`data: ${output}`);
    return fakePromiseRequest("/test/two");
  })
  .then((output) => {
    count++;
    console.log(`Hurray Everything Worked #${count}`);
    console.log(`data: ${output}`);
  })
  .catch((err) => {
    console.log(`Failed at #${count}`);
    console.log(`This is the error ${err}`);
  });
