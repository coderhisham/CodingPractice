const { default: axios } = require("axios");

const getDadJoke = async () => {
  const config = {
    headers: { Accept: "application/json" },
    params: { q: "query" },
  };
  const res = await axios.get("https://icanhazdadjoke.com/", config); //HTML
  console.log(res.data.joke);
};

getDadJoke();
