function solve(input) {
    let mount = input[0]; 
    let countNight =  Number(input[1]);

    let Apartment;
    let Studio;

switch(mount) {
    case "May":
        case "October":
            Studio = 50;
            Apartment = 65;

            if (14 < countNight) {
                Studio *= 0.70;
                Apartment *= 0.90;
            } else if (7 < countNight) {
                Studio *=  0.95;
            }
            break;

case "June":
        case "September":
            Studio = 75.20;
            Apartment = 68.70;
            if (14 < countNight) {
                Studio *=  0.80;
                Apartment *=  0.90;
            }
            break;
        case "July":
        case "August":
            Studio = 76;
            Apartment = 77;
            if (14 < countNight) {
                Apartment *=  0.90;
            }
            break;
    }


let sumA = (countNight * Apartment); 
let sumB = (countNight * Studio);

            console.log(`Apartment: ${sumA.toFixed(2)} lv.`);
            console.log(`Studio: ${sumB.toFixed(2)} lv.`);
    }

solve(["May", "15"])