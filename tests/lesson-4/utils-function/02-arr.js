let numbers = [1, 2, 3];
let names = ["Alice", "Bob", "Charlie"];

// 1. Push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
numbers.push(4);
console.log('Number push:', numbers);

names.push('David');
console.log('Names push:', names);

// 2. Pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
numbers.pop();
console.log('Loại bỏ phần tử cuối của numbers:', numbers);

// 3. Unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
numbers.unshift(0);
console.log('Unshift: Thêm 0 vào đầu numbers:', numbers);

names.unshift('David');
console.log(names);

// 4. Shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].
numbers = [1, 2, 3, 4];
numbers.shift();
console.log(numbers);
