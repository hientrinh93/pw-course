// 1. Object car with properties and printing the year
const car = {
    make: 'Toyota', 
    model: 'Corolla',
    year: 2021
};

console.log(car.year);

// 2. Nested object with person and address
const person = {
    name: 'Hien',
    address: {
        street: '30 Le Loi',
        city: 'Hanoi',
        country: 'Vietnam'
    }
};

console.log(person.address.street);

// 3. object student
const student = {
    name: 'Hien', 
    grades: {
        math: 9,
        english: 10
    }
}
console.log(student['grades']['math']);

// 4. Modifying properties of an object
const settings = {
    volume: 30,
    brightness: 50
}

settings.volume = 20;
console.log(settings);

//  5. Adding a new property to an object
const bike = {
    brand: 'abc',
    model: 'cde'
};

bike['color'] = 'Red';
console.log(bike);

// 6. Deleting a property from an object
employee = {
    name: 'Hien',
    age: 23
};

delete employee.age;

console.log(employee);

// 7. School with classes as properties and students as arrays
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};

console.log (school.classA);
console.log (school.classB);