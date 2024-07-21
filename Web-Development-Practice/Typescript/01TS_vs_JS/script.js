const button = document.createElement("button");

button.addEventListener("click", clickHandler);

function clickHandler(e) {
  console.log(e.target);
}
