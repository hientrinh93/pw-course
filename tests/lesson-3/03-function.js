// 1. Function to multiply two numbers
function multiply(a, b) {
    console.log(`Multiply ${a} * ${b} = ${a * b}`);
}

multiply(10, 3)
multiply(9, -2)

// 2. Function to find the minimum value among three numbers
function findMin(a, b, c) {
    console.log('Min:', Math.min(a, b, c));
}
findMin(10, 5, 8)
findMin(-2, 0, 8)

function findMin2(a, b, c) {
    return Math.min(a, b, c);
}

console.log(`In ra min: ${findMin2(10, 5, 8)}`)

// 3. Function to get top students based on score threshold
// filter: Trả về Một mảng mới chứa các phần tử mà hàm callback trả về true.
// [ { name: 'An', score: 85 }, { name: 'Cuong', score: 90 } ]
function getTopStudents(students, threshold) {
    return students.filter(student => student.score >= threshold).map(student => student.name);
}
const studentsList = [
    { name: 'An', score: 85 },
    { name: 'Binh', score: 72 },
    { name: 'Cuong', score: 90 },
    { name: 'Dung', score: 65 }
];

const topStudents = getTopStudents(studentsList, 80);
console.log(topStudents);

// function getTopStudent(students, threshold){
//     const topStudent = [];

//     for (let i = 0; i < students.length; i++){
//         if (students[i].score >= threshold){
//             topStudent.push(students[i].name);
//         }
//     }
    
//     return topStudent;
// }

// 4. Function to calculate interest

function calculateInterest(principal, rate, years){
    return total = principal + principal * rate * years / 100
}

const invest1 = calculateInterest(1000, 5, 2);
console.log(`Total after 2 years with 5% interest on $1000: ${invest1}`);


const invest2 = calculateInterest(5000, 3.5, 5);
console.log(`Total after 5 years with 3.5% interest on $5000: ${invest2}`);