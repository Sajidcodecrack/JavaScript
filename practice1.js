const prompt = require('prompt-sync')();
let score = prompt("Enter the grade value :");

let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
}
else if (score >= 80 && score <= 89) {
    grade = "A-";
}
else if (score >= 70 && score <= 79) {
    grade = "B";
}
else if (score >= 60 && score <= 69) {
    grade = "B-";
}
else if (score >= 50 && score <= 59) {
    grade = "D";
}
else {
    grade = "F"
}
console.log("According to the grade policy : ", grade);