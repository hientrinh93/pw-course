// a. Khai báo chiều cao của bạn (cm)
const heightCm = 168;

// Lấy phần số lẻ của chiều cao (phần cm)
const oddPart = heightCm % 100;

// b. Tính các chỉ số cân nặng

const idealWeight = (oddPart * 9) / 10;  // Cân nặng lý tưởng
const maxWeight = oddPart;  // Mức cân tối đa
const minWeight = (oddPart * 8) / 10;

// In ra kết quả trên cùng một dòng
console.log(`Can nang ly tuong: ${idealWeight}kg, Cân nặng tối đa: ${maxWeight}kg, Cân nặng tối thiểu: ${minWeight}kg`);
