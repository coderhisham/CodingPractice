//Function which returns an object

function Student(name, age) {
  const student = {
    name: name,
    age: age,
    talk: function () {
      console.log(`Hello I am ${this.name}`);
    },
  };
  return student;
}

let s1 = Student("Hisham", 20);
let s2 = Student("Hanan", 15);
console.log(s1);
s1.talk();
console.log(s2);
s2.talk();

//Not memory efficient
//Create and Stores the values inside each time when function call occurs which is not needed
