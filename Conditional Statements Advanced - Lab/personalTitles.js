function solve(input) {
   let age = Number(input[0]);
   let gender = input[1];

   if (gender == "f" && age < 16) {
      console.log("Miss");
   } else if (gender == "f" && age >= 16) {
      console.log("Ms.");
   } else if (gender == "m" && age < 16) {
      console.log("Master");
   } else {
      console.log("Mr.");
   }
}



solve(["12", "f"])