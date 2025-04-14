let scores = [85, 90, 78];
let ages = [18, 21, 16, 25];
let words = ["apple", "banana", "cherry", "date"];

// 2.1 Lọc các giá trị trong scores > 80. 
let valueabove80 = scores.filter(score => score > 80);
console.log("Giá trị trong scores > 80", valueabove80);

// 2.2 Lọc các giá trị trong ages ≥ 18. 
let ageabove18 = ages.filter(age => age > 18);
console.log("Giá trị trong scores > 80", ageabove18);

// 2.3 Lọc các từ trong words có độ dài > 5. 
let wordabove5 = words.filter(word => word.length > 5);
console.log('Words above 5:', wordabove5);