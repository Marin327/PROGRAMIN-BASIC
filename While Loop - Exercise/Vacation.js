function solve(input) {
    let needMoney = Number(input[0]);
    let currentMoney = Number(input[1]);
    let spendDays = 0;
    let days = 0;
    let index = 2;
    let currentInput = input[index];

    while (currentMoney < needMoney) {
        days++;
        index++;

        if (currentInput == 'spend') {
            spendDays++;

            if (spendDays === 5) {
                console.log("you can't save the money.");
                console.log(days);
                break;
            }
            
            let moneyToSpend = Number(input[index]);
            currentMoney = currentMoney - moneyToSpend;
            if (currentMoney < 0) {
                currentMoney = 0;
            }

        } else if (currentInput === "save") {
            spendDays = 0;
            let moneyToSaved = Number(input[index]);
            currentMoney = currentMoney + moneyToSaved;
        }
        index++;
        currentInput = input[index];
    }
    if (currentMoney >= needMoney) {
        console.log(`You saved the money for ${days} days.`);
    }
}
    solve([
        "2000",
        "1000",
        "spend",
        "1200",
        "save",
        "2000"
    ])