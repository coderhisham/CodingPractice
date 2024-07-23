type Person = { name: string; age: number };

function printPerson(person: Person) {
  console.log(person.name);
}

printPerson({ name: "John", age: 30, isStudent: false }); //Extra property is not allowed

//Extra property is allowed
let p1 = { name: "John", age: 30, isStudent: false };
printPerson(p1); //Extra property is allowed
