function solve(input) {
    let targetSteps = 10000;
    let stepsSum = 0;
    let index = 0;
    let command = input[index];

    while (command !== "Goind home") {
        let steps = Number(command);
        stepsSum += steps;
        if (stepsSum >= targetSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - targetSteps} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        stepsSUm += stepsToHome;
        if (stepsSum >= targetSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - targetSteps} steps over the goal!`);
        } else {
            console.log(`${targetSteps - stepsSum} more steps to reach goal.`);
        }
    }
}
solve(["1000", "1500", "2000", "6500"])