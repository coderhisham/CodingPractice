const password = prompt("Enter a Password");
if (password.length >= 8) {
  if (password.indexOf(" ") == -1) {
    console.log("Good Password");
  } else {
    console.log("Password should not contain spaces");
  }
} else {
  console.log("Password Should be of 8 Characters");
}
