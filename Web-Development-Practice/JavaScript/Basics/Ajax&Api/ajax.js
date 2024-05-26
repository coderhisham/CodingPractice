// AJAX => Asynchronous JavaScript and XML -> Old
// AJAJ => Asynchronous JavaScript and JSON -> New

//JSON => JavaScript Object Notation
const data = `{
    "name": "Hisham",
    "address": "ABC House",
    "Mob": 89946666,
    "Skills": ["Web", "Software", "Hardware"],
    "healthIssue": null
  }
  `;

console.log(data);

//String to JavaScript Object
const parsedData = JSON.parse(data);
console.log(parsedData.name);

//JavaScript Object to String
const stringed = JSON.stringify(parsedData);
console.log(stringed);
