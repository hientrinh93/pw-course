let numbers = [1, 2, 3]; 
let str = "Playwright"; 
let student = { "name": "Alex", "age": 10, "salary": 20 };
let arr = [1, 2, 3, 4, 3, 55, 23];
let dupArr = [1, 2, 3, 1, 2, 4, 5];

/************/ 
// 1. forEach 
// 1.1 In lần lượt từng phần tử của numbers. 
numbers.forEach(num => console.log(num));

// 1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers 
// spread operator ... để "trải" các phần tử của mảng ra thành các đối số riêng lẻ
// tương đương với Math.max(1, 2, 3)
// Array (mảng) -> thường chuyên cho Array
// Iterable objects (mọi thứ có thể lặp qua được bằng for...of)

/************/ 
// Không thể dùng break, continue, hoặc return để thoát khỏi vòng lặp.
/************/ 
const min = Math.min(...numbers);
console.log(`Min number: ${min}`);

const max = Math.max(...numbers);
console.log(`Max number: ${max}`);

// 0: initialValue - giá trị khởi tạo ban đầu cho accumulator.
const sum = numbers.reduce((acc, cur) => acc+cur, 0);
console.log('Sum of numbers:', sum);

// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi 
const doubleNumbers = numbers.map(num => num*2);
console.log('Mảng mới từ numbers, mỗi phần tử nhân đôi:', doubleNumbers);

/************/ 
