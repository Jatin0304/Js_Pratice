
// The reason is that an equality check ==
// and comparison > <>=<= work different 

// comparison convert null to number, treating as a 0.
// That's why (3) null >=0 is true and (1) and null >0 is false


console.log(null < 0);
console.log(null == 0);
console.log(null <= 0);

console.log(undefined < 0);
console.log(undefined < 0);
console.log(undefined < 0);

// === strictly check number and its datatype