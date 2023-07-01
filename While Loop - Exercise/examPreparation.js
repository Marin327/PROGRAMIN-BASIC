function solve(input) {
    let negativeGrades = Number(input.shift());
 
    let countOfBadGrades = 0;
    let sumGrades = 0;
    let gradesCounter = 0;

    let lastProblem;
    let avgGrade;
 
     while(countOfBadGrades < negativeGrades) {
          let nameOfExercise = input.shift();
            let grade = Number(input.shift());
 
           if(nameOfExercise == "Enough") {
              avgGrade = sumGrades / gradesCounter;
                console.log(`Average score: ${avgGrade.toFixed(2)}`);
                console.log(`Number of problems: ${gradesCounter}`);
                console.log(`Last problem: ${lastProblem}`);
                break;
            }
               if(grade <= 4) {
                 countOfBadGrades++;
               }                 
                 sumGrades += grade;
                 gradesCounter++;
                 lastProblem = nameOfExercise;
            }
                if(countOfBadGrades == negativeGrades) {
                    console.log(`You need a break, ${countOfBadGrades} poor grades.`);
                }
           }
            solve([
                "3",
            "Money",
            "6",
            "Story",
            "4",
            "Spring",
            "Time",
            "5",
            "Bus",
            "6",
            "Enough"])