function solve(input) {
    let L = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percentage = Number(input[3]);
 
    let tankVolumeCm = L * w * h;
    let tankVolume = tankVolumeCm / 1000;
 
    let total = tankVolume - (tankVolume * (percentage / 100));
    console.log(total);
    
 }

solve([
"105",
"77",
"89",
"18.5"
])