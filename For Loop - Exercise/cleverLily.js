function solve(input) {
   let age = Number(input[0]); //· Възрастта на Лили - цяло число в интервала [1...77]
   let washingMashine = Number(input[1]); //· Цената на пералнята - число в интервала [1.00...10 000.00]
   let singlePrice = Number(input[2]); //· Единична цена на играчка - цяло число в интервала [0...40]

   let savedMoney = 0;
   let toysCounter = 0;
   let stolenMoney = 0;
   let addMoney = 10;

   for (let currentAge = 1; currentAge <= age; currentAge++) {
      if (currentAge % 2 === 0) {
         // money
         savedMoney += addMoney;
         addMoney += 10;
         stolenMoney++;
      } else {
         toysCounter++;
      }
   }
   let totalMoneyFromToys = singlePrice * toysCounter;
   let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;

   if (totalSavedMoney >= washingMashine) {
      console.log(`Yes! ${(totalSavedMoney - washingMashine).toFixed(2)}`);

   } else {
      console.log(`No! ${(washingMashine - totalSavedMoney).toFixed(2)}`);
   }
}


solve(["10",
   "170.00",
   "6"
])