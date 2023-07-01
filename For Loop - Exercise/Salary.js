function solve(input) {
   let openTabs = Number(input[0]);
   let salary = Number(input[1]);
   
   for (let index = 2; index < input.length; index++) {
      let currentTab = input[index];

      switch (currentTab) {
         case "Facebook": salary -= 150; break;
         case "Instagram": salary -= 100; break;
         case "Reddit": salary -= 50; break;
      }
      if (salary <= 0) {
         console.log("You have lost your salary.");
         break;
      }
   }
      if (salary > 0) {
         console.log(Math.floor(salary));
      }
   }
solve([
   "10",
   "750",
   "Facebook",
   "Dev.bg",
   "Instagram",
   "Facebook",
   "Reddit",
   "Facebook",
   "Facebook"])