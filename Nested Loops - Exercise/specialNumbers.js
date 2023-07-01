function solve(input) {

  let specialNumber = Number(input[0]);
  let output = '';
  //let counter  = 0; проверка на завъртанията
  //1111
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          //counter++; увеличаваш завъртанията
         if(specialNumber % i === 0 &&
            specialNumber % j === 0 &&
            specialNumber % k === 0 &&
            specialNumber % l === 0) {
            output += `${i}${j}${k}${l} `;
            
          }
        }
      }
    }
  }
  //console.log(counter); колко завъртания има!
  console.log(output);
}
solve(["3"])