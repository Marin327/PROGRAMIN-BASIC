function solve(input) {
    let num = Number(input[0]);
    let bonusPoints = 0; 

    if (num <= 100) {
    bonusPoints = 5;
  } else if (num > 1000) {
    bonusPoints = 0.10 * num;
  } else if (num > 100) {
    bonusPoints = 0.20 * num;
  } 
  
  if (num % 2 == 0) {
      bonusPoints += 1 ;
} else if (num % 10 == 5) {  
    bonusPoints += 2; 
}
console.log(bonusPoints);
console.log(num + bonusPoints);

}
solve(["2703"]);