var n1 = 1;
var n2 = 2;
var sum = function (n1, n2) {
    if (n2 === void 0) { n2 = 1; }
    return n1 + n2;
};
//npx tsc 02TS_Manual/script1.ts
console.log(sum(n1));
