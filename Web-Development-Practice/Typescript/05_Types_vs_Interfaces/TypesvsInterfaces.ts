// Types vs Interfaces in TypeScript

// Types and interfaces in TypeScript are both used to define the shape of an object or a type of data. However, they have some key differences and use cases.

// Similarities:
// 1. Define Shape: Both `type` and `interface` can be used to define the shape of an object.
// 2. Optional Properties: Both can have optional properties, denoted by `?`.

// Differences:
// 1. Extension:
//    - Interfaces are extendable and can be merged. This allows for a more OOP (Object-Oriented Programming) approach.
//    - Types cannot be reopened to add new properties and use intersections (`&`) to compose new types, suited for a functional programming approach.
// 2. Primitives and Unions:
//    - Types can alias primitive types and define union types.
//    - Interfaces cannot alias primitives or define unions and are strictly for defining the shape of objects.

// Example of a type defining a person's structure
type Person = {
  name: string;
  age: number;
  isStudying?: boolean;
  physique?: {
    height: number;
    weight: number;
  };
}; // ? => Optional Property, Here isStudying is optional
const person2: Person = { name: "Hisham", age: 20 }; // OK

// Example of an interface defining a person's structure
interface PersonInterface {
  name: string;
  age: number;
  isStudying?: boolean;
} // ? => Optional Property, Here isStudying is optional
const person3: PersonInterface = { name: "Hisham", age: 20 }; // OK

// Example of a type aliasing a primitive
type Phone = number;
let phone: Phone = 1234567890;

// Attempting to use an interface in a similar way to a type alias results in an error
// interface PhoneInterface = number; // Error: An interface can only extend an object type or intersection of object types with statically known members.
