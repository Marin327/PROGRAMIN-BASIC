function solve(input) {
    let yearTax = Number(input[0]);
    let sneakers = yearTax - (yearTax * 0.40); 
    let teamClothes = sneakers - (sneakers * 0.20);
    let ball = teamClothes / 4;
    let accessories = ball / 5;

    let total = yearTax + sneakers + teamClothes + ball + accessories;
    console.log(total);

}

solve(["365"]);