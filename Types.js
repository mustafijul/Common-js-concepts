// JS is a dynamic type programming language no need to give the data type name before declare them
// 1. primitive

//  stores value in different memory space
let x = 9;
let y = 7;
// console.log(x, y);
x = 70;
// console.log(x, y);

//  2. Non primitive
//  stores value in same memory references
let p = { job: "web developer" };
let q = p;
console.log(p, q); //* stores in same memory reference
q.job = "software engineer";
console.log(p, q);
