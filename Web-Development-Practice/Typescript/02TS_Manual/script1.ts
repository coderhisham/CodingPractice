const n1 = 1;
const n2 = 2;

const sum = (n1: number, n2: number) => {
  return n1 + n2;
};

//npx tsc script1.ts
//npm tsc -noEmitOnError script1.ts

console.log(sum(n1));
