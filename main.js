// String, Numbers, Boolean, null , undefined

// Strings and Numbers

const name = 'Albert';
const age = 25;

        //Concatenation
console.log('My name is ' + name + ' and I am ' + age);

        //Template String
console.log(`My name is ${name} and I am ${age}`);

const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// Arrays

const array = ['item1', 'item2', 10, true];
console.log(array);

// Object Literals

const person = {
    firtName: 'Lucas',
    lastName: 'Costa',
    age: 20,
    hobbies: ['games', 'movies', 'series'],
    address: {
        street: 'Castelo Branco, 1339',
        city: 'Manaus',
        state: 'Amazonas'
    }
}

console.log(person.hobbies[1]);

// Array of Objects
const todos = [
    {
        id: 1,
        text: 'Morning Class',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Afternoon Class',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Evening Class',
        isCompleted: false
    }
];

console.log(todos);

// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//Loops - For           Loops are written the same way as C and Java
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let todo of todos) {
    console.log(todo.text)
}

// forEach, map, filter
/* //forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});
*/

// map - Generates an array
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

// filter - Filter the arrays by a condition
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);


// Functions
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers();