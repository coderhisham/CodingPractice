let a = 4; // number: assigned Implicitly
let b: string = "Hello"; // string: assigned Explicitly

a = "Hello"; // Error: Type 'string' is not assignable to type 'number'.
b = 4; // Error: Type 'number' is not assignable to type 'string'.

const c = 4; // number: assigned Implicitly
const d: string = "Hello"; // string: assigned Explicitly

let e: null = null; // null: assigned Explicitly
e = undefined; // Error: Type 'undefined' is not assignable to type 'null'.

let f: undefined = undefined; // undefined: assigned Explicitly
f = null; // Error: Type 'null' is not assignable to type 'undefined'.
