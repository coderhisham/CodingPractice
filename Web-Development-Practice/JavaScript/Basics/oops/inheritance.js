//Super: Reference to the main class

class Person {
  constructor(name, age) {
    this.creature = "human";
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); //Parent Constructor is being called
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); //Parent Constructor is being called
    this.subject = subject;
  }
}

let p1 = new Student("Hisham", 20, 100);
let p2 = new Teacher("Bro", 35, "Coding");
let p3 = new Person("Hanan", 15);

console.log(p1, p2, p3);
p1.talk();
p2.talk();
p3.talk();

console.log(p1.talk === p2.talk);
console.log(p2.creature);
