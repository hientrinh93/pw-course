let scores = [85, 90, 78];
let numbers = [1, 2, 3, 4]; 
let expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores.
let sumScores = scores.reduce((acc, num) => acc+num, 0);
console.log(sumScores);

// 6.2 Tính tích các giá trị trong numbers. 
let sumNumbers = numbers.reduce((acc, num) => acc*num, 1);
console.log(sumNumbers);

// 6.3 Tính tổng các giá trị trong expenses. 
let sumExpenses = expenses.reduce((acc, num) => acc+num, 0);
console.log(sumExpenses);