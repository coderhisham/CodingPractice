//Constructors - by convention Doesn't return a value
//Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`Hello I am ${this.name}`);
};

let p1 = new Person("Hisham", 20);
let p2 = new Person("Hanan", 15);

console.log(p1, p2);
p1.talk();
p2.talk();

console.log(p1.talk === p2.talk);

//new=> Creates Plain js object and adds the values into it
