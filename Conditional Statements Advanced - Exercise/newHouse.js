function solve(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    
    let totalPrice = 0;
switch(flowerType) {
    case "Roses":
    totalPrice = flowerCount > 80 ? 5 * 0.90 : 5.00;
     // if (flowerCount > 80) {
          //     flowerPrice = 5.00 * 0.90;
          // } else {
          //     flowerPrice = 5.00;
          // }
          break;
          case "Dahlias":
            totalPrice = flowerCount > 90 ? 3.80 / 0.85 : 3.80;
            break;
            case "Tulips":
              totalPrice = flowerCount > 80 ? 2.80 * 0.85 : 2.80;
                break;
            case "Narcissus":
                totalPrice = flowerCount < 120 ? 3.00 * 1.15 : 3.00;
                break;
            case "Gladiolus":
                totalPrice = flowerCount < 80 ? 2.50 * 1.20 : 2.50;
                break;
        }
        let result = Math.abs(budget - totalPrice);
        if (totalPrice > budget) {
            console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);
        } else {
            console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${result.toFixed(2)} leva left.`);
        }
      }

solve([
    "Roses",
    "55",
    "250"
])