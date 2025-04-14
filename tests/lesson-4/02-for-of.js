// 2. for...of
// Có thể dùng break, continue, return

// 2.1 In lần lượt từng ký tự của str 
const str = "Playwright";
for (const char of str){
    console.log(char);
}
str.split('').forEach(char => console.log(char));

// 2.2 Tạo mảng đảo ngược từ str 
const reverseString = [];
for (const char of str){
    reverseString.unshift(char);
}
console.log(reverseString);

const reverseArr = str.split("").reverse();
console.log(reverseArr);

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr 
let arr = [1, 2, 3, 4, 3, 55, 23];
console.log('Vị trí đầu tiên của 3:', arr.indexOf(3));
console.log('Vị trí cuối cùng của 3:', arr.lastIndexOf(3));

// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
let dupArr = [1, 2, 3, 1, 2, 4, 5];
let uniqueItems = dupArr.filter((item) => dupArr.indexOf(item) === dupArr.lastIndexOf(item));
console.log("Unique Items:", uniqueItems);