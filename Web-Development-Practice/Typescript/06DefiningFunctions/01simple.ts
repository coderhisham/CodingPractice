function printPersonDetails(name: string, age: number) {
  // With implicit return type
  console.log(name);
  return name + " is " + age + " years old";
}

function getPersonDetails(
  name: string,
  age: number
): string /*Setting Return Type */ {
  // With explicit return type
  console.log(name);
  return name + " is " + age + " years old";
}

const personDetails = printPersonDetails("John", 30); //Implicit return type is string
const personDetails1: string = getPersonDetails("John", 30); //Explicit return type is string
