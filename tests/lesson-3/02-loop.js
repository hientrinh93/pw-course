// 1. Calculate sum from 1 to 100
// using for
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum)

// using array.from and reduce()
const sum2 = Array.from({ length: 100 }, (_,  i) => i + 1).reduce((acc, num) => acc + num, 0);
console.log(sum2)

// 2. Print multiplication tables from 2 to 9
for (let i = 2; i <= 9; i++){
    console.log(`Muptiplication for ${i}:`)
    for (let j = 1; j <= 9; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 3. Create an array with odd numbers from 1 to 99
const oddNumber = [];
for (let i = 1; i < 100; i+=2){
    oddNumber.push(i);
}
console.log(oddNumber);

// 4. Print 10 emails based on user name and sequence number
for (let i = 1; i <=10; i++){
    console.log(`user${i}@gmail.com`);
}

// 5. Calculate total revenue from 12 months
let totalRevenue = 0;
const monthlyRevenue = [
    { month: 1, total: 1200 },
    { month: 2, total: 1500 },
    { month: 3, total: 1800 },
    { month: 4, total: 1400 },
    { month: 5, total: 2000 },
    { month: 6, total: 2200 },
    { month: 7, total: 1900 },
    { month: 8, total: 2100 },
    { month: 9, total: 2300 },
    { month: 10, total: 2400 },
    { month: 11, total: 2700 },
    { month: 12, total: 3000 }
  ];
for (let i = 0; i < monthlyRevenue.length; i++){
    totalRevenue += monthlyRevenue[i].total;
}
console.log('Total Revenue:', totalRevenue);

// using reduce()
const totalRev = monthlyRevenue.reduce((sum, item) => sum + item.total, 0);
console.log('Total Revenue 2:', totalRev);