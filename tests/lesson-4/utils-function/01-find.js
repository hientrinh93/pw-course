// find: Tìm phần tử đầu tiên trong mảng thỏa mãn một điều kiện (predicate function)
let scores = [85, 90, 78];
let ages = [18, 21, 16, 25];
let words = ["apple", "banana", "cherry", "date"];

// 3.1 Tìm giá trị đầu tiên trong scores > 80. 
let firstScore = scores.find(score => score > 80);  
console.log('giá trị đầu tiên trong scores > 80:', firstScore);

// 3.2 Tìm giá trị đầu tiên trong ages > 20.
let firstAge = ages.find(age => age > 20);
console.log(' giá trị đầu tiên trong ages > 20:', firstAge);

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5. 
let firstLength = words.find(word => word.length > 5);
console.log('từ đầu tiên trong words có độ dài > 5:', firstLength);