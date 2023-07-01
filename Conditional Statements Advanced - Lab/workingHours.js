function solve(input) {
    let time = Number(input[0]);
    let partOfDay = input[1];

    if (time >= 10 && time <= 18) {
        switch (partOfDay) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            case "Sunday":
                console.log("closed");
                break;
            default:
                console.log("error");
                break;
        }
    } else {
        console.log("closed");
    }
}

solve(["11", "Monday"])