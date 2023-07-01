function solve(input) {
   let nameArchitect = input[0];
   let numberOfProject = Number(input[1]);
   
   let needTime = numberOfProject * 3;

      console.log(`The architect ${nameArchitect} will need ${needTime} hours to complete ${numberOfProject} project/s.`);

}

solve(["George", "4"]);