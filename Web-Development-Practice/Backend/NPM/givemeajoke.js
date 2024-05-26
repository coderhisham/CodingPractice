const giveMeAJoke = require("give-me-a-joke");

giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});

console.log("=======================================");

giveMeAJoke.getRandomCNJoke((joke) => {
  console.log(joke);
});
