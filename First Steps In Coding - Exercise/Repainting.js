function solve(input) {
        let naylon = Number(input[0]);
        let paint = Number(input[1]);
        let thinner = Number(input[2]);
        let workingTime = Number(input[3]);

      
        let bagPrice = 0.4;

        let naylonSum = (naylon + 2) * 1.50;
        let paintSum = (paint * 1.1) * 14.50;
        let thinnerSum = thinner * 5;

        let totalMaterials = naylonSum + paintSum + thinnerSum + bagPrice;
        let finalSum = (totalMaterials * 0.30) * workingTime;
        let total = totalMaterials + finalSum;
      

       console.log(total);
}

solve([
"10",
"11",
"4",
"8"])