let scores = [85, 90, 78];
let ages = [18, 21, 16, 25];
let words = ["apple", "banana", "cherry", "date"];

// every: ALL
// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không
// return True or False
const allabove70 = scores.every(score => score > 70);  // every(true/false)
console.log('All scores above 70:', allabove70);

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không 
const allabove15 = ages.every(age => age > 15);
console.log('All ages above 15:', allabove15);

// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không. 
const allabove3 = words.every(word => word.length > 3);
console.log('All words above 3:', allabove3);