// some: AT LEAST ONE
let scores = [85, 90, 78];
let ages = [18, 21, 16, 25];
let words = ["apple", "banana", "cherry", "date"];

// 5.1 Kiểm tra scores có giá trị nào > 80 không. 
let someabove80 = scores.some(score => score > 80);  
console.log('Some scores above 80:', someabove80);

// 5.2 Kiểm tra ages có giá trị nào < 18 không.
let somebelow18 = ages.some(age => age < 15);
console.log('Some ages below 15:', somebelow18);

// 5.3 Kiểm tra words có từ nào dài > 5 không. 
let someabove5 = words.some(word => word.length > 5);
console.log('Some words above 5:', someabove5);