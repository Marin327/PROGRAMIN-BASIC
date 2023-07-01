function solve(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeter = Number(input[1]);
    let timeSecondsPerMeter = Number(input[2]);
    
  let timeNeeded = distanceInMeter * timeSecondsPerMeter;
  let timeResistance = Math.floor(distanceInMeter / 15).toFixed(2) * 12.5;
  let totalTime = timeNeeded + timeResistance; 
  let difference = Math.abs(totalTime - recordInSeconds);
    
    if(recordInSeconds > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)}`+` seconds.`);    
       } else if (recordInSeconds <= totalTime) {
        console.log(`No, he failed! He was ${difference.toFixed(2)}`+` seconds slower.`);
      }
    }
    solve([
    "10464",
    "1500",
    "20"])
     






