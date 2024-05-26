class Person {
  constructor(name, age) {
    //Excecutes Immediately
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi I am ${this.name}`);
  }
}

let p1 = new Person("Hisham", 20);
let p2 = new Person("Hanan", 15);

console.log(p1);
console.log(p2);

p1.talk();
p2.talk();

console.log(p1.talk === p2.talk);
