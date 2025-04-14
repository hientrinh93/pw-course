// for...in (object)
let student = { "name": "Alex", "age": 10, "salary": 20 };

// 3.1 In tên và giá trị mỗi thuộc tính của student 
for (const property in student){
    console.log(property);
    console.log(student[property]);
}

// 3.2 Tính tổng các giá trị số trong student 
let sum = 0;
for (const property in student){
    if (typeof(student[property]) === 'number'){
        sum += student[property];
    }
}
console.log('Print sum', sum)

// using Object.value
let total = Object.values(student)
                    .filter(value => typeof(value) === 'number')
                    .reduce((acc, num) => acc+num, 0);
console.log(total);

// 3.3 Tạo mảng chứa tên các thuộc tính của student 
let keys = Object.keys(student);
console.log(keys);