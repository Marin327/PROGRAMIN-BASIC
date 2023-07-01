function solve(input) {
    let day = input[0];
    
  if(day == "Monday" || day == "Tuesday" || day == "Friday") {
    console.log(12);
  } else if (day == "Wednesday" || day == "Thuesday") {
    console.log(14);
  } else if(day == "Saturday" || day == "Sunday") {
    console.log(16);
  }
}
   solve(["Monday"])