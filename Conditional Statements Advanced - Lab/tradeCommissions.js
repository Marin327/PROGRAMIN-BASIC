function solve(input) { 
    let city = input[0]; 
    let salary = Number(input[1]); 
    let bonus = 0;

    if (city === "Sofia") {
        if (salary >= 0 && salary <= 500) {
            bonus = salary * 0.05;
            console.log(bonus.toFixed(2));
        } else if (salary > 500 && salary <= 1000) {
            bonus = salary * 0.07;
            console.log(bonus.toFixed(2));
        } else if (salary > 1000 && salary <= 10000) { 
            bonus = salary * 0.08;
            console.log(bonus.toFixed(2));
        } else if (salary > 10000) {
            bonus = salary * 0.12;
            console.log(bonus.toFixed(2));
        } else { 
            console.log("error");
        }
    } else if (city === "Varna") {
        if (salary >= 0 && salary <= 500) {
            bonus = salary * 0.045;
            console.log(bonus.toFixed(2));
        } else if (salary > 500 && salary <= 1000) { 
            bonus = salary * 0.075;
            console.log(bonus.toFixed(2));
        } else if (salary > 1000 && salary <= 10000) {
            bonus = salary * 0.10;
            console.log(bonus.toFixed(2));
        } else if (salary > 10000) { 
            bonus = salary * 0.13;
            console.log(bonus.toFixed(2));
        } else { 
            console.log("error");
        }
    } else if (city === "Plovdiv") {
        if (salary >= 0 && salary <= 500) {
            bonus = salary * 0.055;
            console.log(bonus.toFixed(2));
        } else if (salary > 500 && salary <= 1000) {
            bonus = salary * 0.08;
            console.log(bonus.toFixed(2));
        } else if (salary > 1000 && salary <= 10000) {
            bonus = salary * 0.12;
            console.log(bonus.toFixed(2));
        } else if (salary > 10000) {
            bonus = salary * 0.145;
            console.log(bonus.toFixed(2));
        } else { 
            console.log("error");
        }
    } else { 
        console.log("error");
    }
}
solve(["Sofia", "1500"])