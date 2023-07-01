function solve(input) {
    let vacation = Number(input[0]);
    let puzels = Number(input[1]);
    let dols = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let number = puzels + dols + teddyBears + minions + trucks;
    let puzelsPrice = 2.6;
    let dolsPrice = 3;
    let teddyBearsPrice = 4.1;
    let minionsPrice = 8.2;
    let trucksPrice = 2;

    let bigPrice = puzels * puzelsPrice + dols * dolsPrice + teddyBears * teddyBearsPrice + minions * minionsPrice + trucks * trucksPrice;
    let bigPricePlus50 = (bigPrice - (bigPrice * 0.25));
    let finalPriceNaem = (bigPrice - (bigPrice * 0.1));
    let finalPricePlus50 = (bigPricePlus50 - (bigPricePlus50 * 0.1));

    if (number >= 50) {
        if (finalPricePlus50 >= vacation) {
            let a = (finalPricePlus50 - vacation).toFixed(2);
            console.log(`Yes! ${a} lv left.`)
        } else {
            let a = (vacation - finalPricePlus50).toFixed(2);
            console.log(`Not enough money! ${a} lv needed.`);
        }
    } else {
        if (finalPriceNaem >= vacation) {
            let a = (finalPriceNaem - vacation).toFixed(2);
            console.log(`Yes! ${a} lv left.`)
        } else {
            let a = (vacation - finalPriceNaem).toFixed(2);
            console.log(`Not enough money! ${a} lv needed.`);
        }
    }
}

solve([
    "40.8",
    "20",
    "25",
    "30",
    "50",
    "10"
]);