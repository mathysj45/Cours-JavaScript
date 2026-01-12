const grades = [12, 15, 18, 10, 14, 16];
let gradesSum = 0;
for (grade of grades) {
  gradesSum += grade;
}
const average = gradesSum / grades.length;
console.log("La moyenne est de :", average);