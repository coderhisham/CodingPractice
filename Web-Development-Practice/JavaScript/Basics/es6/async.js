/*
    async: Returns a Promiseee
    async function hello(){
        body
    }
*/

const asyncReq = async (url) => {
  const rand = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (rand > 3500) {
      return "This is Your Fake Data";
    }
    throw "Connection Timed Out :(";
  }, 1000);
};

asyncReq("/test")
  .then((data) => {
    console.log("Worked #1");
    console.log(`data: ${data}`);
    return asyncReq("/test/one");
  })
  .then((data) => {
    console.log("Worked #1");
    console.log(`data: ${data}`);
    return asyncReq("/test/two");
  })
  .catch((err) => {
    console.log("Oh! an error occured");
    console.log(`err: ${err}`);
  });
