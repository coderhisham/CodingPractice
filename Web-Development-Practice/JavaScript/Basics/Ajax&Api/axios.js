//Normal Method
const axios = require("axios");
axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESPONSE!!", res.data);
  })
  .catch((er) => {
    console.log("Error!!", er);
  });

//Async Method
const getStarWarsPerson = async (n) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${n}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

getStarWarsPerson(5);
