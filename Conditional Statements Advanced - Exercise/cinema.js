function solve(input) {
    let projectType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let income = 0;
if(projectType === "Premiere") {
income = rows * cols * 12;
    } else if(projectType === "Normal") {
        income = rols * cols * 7.50;
    } else if(projectType == "Discount") {
        income = rols * cols * 7.50;
    }
    console.log(`${income.toFixed(2)} leva.`);
}
solve([
    "Premiere",
    "10",
    "12"])