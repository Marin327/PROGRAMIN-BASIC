    function solve(input) {    
        let chickenMenus = Number(input[0]);
        let fishMenus = Number(input[1]);
        let veganMenus = Number(input[2]);

let chickenMenusPrice = chickenMenus * 10.35;
let fishMenusPrice = fishMenus * 12.40;
let veganMenusPrice = veganMenus * 8.15;

let allMenusPrice = chickenMenusPrice + fishMenusPrice + veganMenusPrice;
let desertPrice = allMenusPrice * 0.20;
let finalPrice = allMenusPrice + desertPrice + 2.50;
        
        console.log(finalPrice);
    }

solve([
"2",
"4",
"3"])