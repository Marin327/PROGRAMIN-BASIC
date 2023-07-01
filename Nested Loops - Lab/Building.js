function solve(input) {
   
   let floorCount = Number(input[0]);
   let roomCount = Number(input[1]);

   for (let floorNumber = floorCount; floorNumber >= 1; floorNumber--) {
      let roomType = "";
      if (floorNumber === floorCount) {
         roomType = "L";
      } else if (floorNumber % 2 == 0) {
         roomType = "0";
      } else {
         roomType = "A";
      }

      let floor = "";
      for (let roomNumber = 0; roomNumber < roomCount; roomNumber++) {
         floor = floor + `${roomType}${floorNumber}${roomNumber} `;
      }

      console.log(floor.trim());
   }

}
solve(["6", "4"])