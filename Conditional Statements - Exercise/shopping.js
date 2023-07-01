function solve(input) {
  let budget = Number(input[0]);
  let GPU = Number(input[1]);
  let CPU = Number(input[2]);
  let RAM = Number(input[3]);

  let GPUPrice = 250;
  let CPUPrice = 0.35 * (GPU * GPUPrice);
  let RAMPrice = 0.10 * (GPU * GPUPrice);
  let total = GPU * GPUPrice + CPU * CPUPrice + RAM * RAMPrice;
  
  if (GPU >= CPU) {
    total *= 0.85;
  } else if (GPU < CPU) {
    total;
  }
  if (budget >= total) {
    console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
  } else if (budget < total) {
    console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);

  }
}
solve([
  "900",
  "2",
  "1",
  "3"
])





//Let GPUPrice = 250;
//let CPUPrice = 0.35 * (GPU * GPUPrice);
//let RAMPrice = 0.10 * (GPU * GPUPrice);
//let total = GPU * GPUPrice + CPU * CPUPrice + RAM * RAMPrice;