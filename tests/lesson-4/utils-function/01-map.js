// map
let scores = [85, 90, 78];
let ages = [18, 21, 16, 25];
let words = ["apple", "banana", "cherry", "date"];

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.
let modifiedScore = scores.map(score => {
    if (score < 90){
       // return Math.round(score * 1.1);
       return parseFloat((score * 1.1).toFixed(2));
    } else {
        return parseFloat((score * 0.95).toFixed(2));
    }
})

console.log(modifiedScore);

// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi. 
let numbers = [1, 2, 3];
let numberString = numbers.map(number=> String(number));
console.log(numberString);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị. 
let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);