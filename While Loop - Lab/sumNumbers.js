function solve(input) {
  let index = 0;
let sum = 0;
  let n = Number(input[index]);
  index++;
  while(sum !== n) {
    let currentNum = Number(input[index]);
    index++;
   sum += currentNum;

  }
  console.log(sum);
}
solve(["100", "10", "20", "30", "40"])
