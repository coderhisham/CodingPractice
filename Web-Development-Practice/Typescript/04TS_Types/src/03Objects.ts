//Older Method
const person: { name: string; age: number } = { name: "Hisham", age: 20 };
person = { name: "Hisham", age: 20, isStudying: true }; //Error: Object literal may only specify known properties, and 'isStudying' does not exist in type '{ name: string; age: number; }'.

//Modern Way
type Person = { name: string; age: number; isStudying?: boolean }; // ? => Optional Property, Here isStudying is optional
const person2: Person = { name: "Hisham", age: 20 }; // OK
