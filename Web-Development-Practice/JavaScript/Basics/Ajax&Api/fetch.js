// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("Second Req Resolved");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!!!", e);
//   });

//Using Async
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json(); //We need to convert res to JSON in Fetch
    console.log(data);
    const res1 = await fetch("https://swapi.dev/api/people/2/");
    const data1 = await res.json();
    console.log(data1);
  } catch (e) {
    console.log("Error!!", e);
  }
};

loadStarWarsPeople();
