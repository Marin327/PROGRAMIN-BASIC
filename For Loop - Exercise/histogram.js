function solve(input) {
   let n = Number(input[0]);

   let p1 = 0;
   let p2 = 0;
   let p3 = 0;
   let p4 = 0;
   let p5 = 0;

   for(let i = 1; i <= n; i++) {
      let currentNum= Number(input[i]);

      if(currentNum < 200) {
         p1 += 1;
      } else if(currentNum < 400) {
         p2 += 1;
      } else if(currentNum < 600) {
         p3 += 1;
      } else if(currentNum < 800) {
         p4 += 1;
      } else if(currentNum < 1000) {
         p5 += 1;
      }
   }
   console.log(`${(p1 / n * 100).toFixed(2)}%`);
   console.log(`${(p2 / n * 100).toFixed(2)}%`);
   console.log(`${(p3 / n * 100).toFixed(2)}%`);
   console.log(`${(p4 / n * 100).toFixed(2)}%`);
   console.log(`${(p5 / n * 100).toFixed(2)}%`);
}
solve(["3", "2", "1", "999"])