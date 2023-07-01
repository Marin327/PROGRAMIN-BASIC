function solve(input) {
 let pages = Number(input[0]);
 let pagesPerHour = Number(input[1]);
 let days = Number(input[2]);

 let totalPages = pages / pagesPerHour;
 let totalDays = totalPages / days;
    console.log(totalDays);
}

solve(["212", "20", "2"]);