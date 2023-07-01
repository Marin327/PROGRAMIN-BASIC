function solve(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    
    let sumTimes = firstTime + secondTime + thirdTime;
    let minutes = Math.floor (sumTimes / 60);
    let seconds = sumTimes % 60;
    
     if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    console.log (minutes + ":" + seconds);
    
    }
    solve(["35", "45", "44"])