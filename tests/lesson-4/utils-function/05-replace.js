let phoneNumber = "0123 456 789";
let report = "Có một lỗi trong hệ thống.";
let numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber.
console.log(phoneNumber.replaceAll(' ', '.'));
console.log(phoneNumber.replace(/ /g, '.'));  // regex

// 2. Thay "lỗi" bằng "bug" trong report. 
console.log(report.replaceAll('lỗi', 'bug'));

// 3. Thay "," bằng "." trong numbersStr. 
console.log(numbersStr.replaceAll(',', '.'));
console.log(numbersStr.replaceAll(/,/g, '.'));