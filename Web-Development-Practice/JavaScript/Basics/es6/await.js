const asyncReq = async (url) => {
  const rand = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (rand > 3500) {
      return "This is Your Fake Data";
    } else {
      throw "Connection Timed Out :(";
    }
  }, 1000);
};

async function test() {
  await asyncReq("/test");
  await asyncReq("/test/one");

  return "All Done";
}

test().then((d) => {
  console.log(d);
});
