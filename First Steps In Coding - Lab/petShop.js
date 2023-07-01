function solve(input) {
let dogs = Number(input[0]);
let cats = Number(input[1]);

let price = dogs * 2.50 + cats * 4;

console.log(`${price} lv.`);
}

solve(["5", "4"]);