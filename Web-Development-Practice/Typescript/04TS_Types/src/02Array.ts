const a = [1, 2, 3, 4, 5]; // number[]: assigned Implicitly
a.push("hello"); // Error: Argument of type '"hello"' is not assignable to parameter of type 'number'.
a.push(6); // OK

const b: number[] = [1, 2, 3, 4, 5]; // number[]: assigned Explicitly
b.push("hello"); // Error: Argument of type '"hello"' is not assignable to parameter of type 'number'.
b.push(6); // OK

const c: [1, 2, 3, 4, 5] = [1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]: assigned Explicitly
c.push("hello"); // Error: Argument of type '"hello"' is not assignable to parameter of type '1'.
c.push(6); // Error: Argument of type '6' is not assignable to parameter of type '1'.
