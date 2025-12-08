// map

const arr = [1, 2, 3, 4, 5];

// Double - [2,4,6,8,10]

// Triple - [3,6,9,12,15]

// Binary - ['10','100','110','1000','1010']

function double(num) {
    return num * 2;
}

const output = arr.map(double);

const output2 = arr.map(function triple(num) {
    return num * 3;
});

const output3 = arr.map(num => num.toString(2));

console.log(output); // [2, 4, 6, 8, 10]
console.log(output2); // [3, 6, 9, 12, 15]
console.log(output3); // ['10', '100', '110', '1000', '1010']



// filter

function isOdd(num) {
    return num % 2;
}

function isEven(num) {
    return num % 2 == 0;
}

function greaterThan4(num) {
    return num > 4;
}

const output4 = arr.filter(isOdd);

const output5 = arr.filter(isEven);

const output6 = arr.filter((x) => x > 4);;

// reduce

var nums = [5, 1, 3, 2, 4];

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const sum = findSum(nums);
console.log(sum); // 15

const sum2 = nums.reduce(function (accumulator, currentValue) {
    accumulator = accumulator + currentValue;
    return accumulator;
}, 0);

console.log(sum2); // 15

const sum3 = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum3); // 15

function findMax(arr) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const max = findMax(nums);
console.log(max); // 5

const max1 = nums.reduce((acc, curr) => acc < curr ? curr : acc);
console.log(max1); // 5

// more applications of map, filter, reduce

const users = [
    { firstName: "John", lastName: "Doe", age: 20 },
    { firstName: "Jane", lastName: "Smith", age: 30 },
    { firstName: "Sam", lastName: "Brown", age: 20 },
    { firstName: "Sara", lastName: "Davis", age: 35 }
];

const usernames = users.map(user => user.firstname + " " + user.lastName);
console.log(usernames); // ["John Doe", "Jane Smith", "Sam Brown", "Sara Davis"]

const output7 = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output7); // { '20': 2, '30': 1, '35': 1 }

const namesOfUsersageless30 = users.filter(user => user.age < 30).map(user => user.firstName + " " + user.lastName);
console.log(namesOfUsersageless30); // ["John Doe", "Sam Brown"]
const usernames2 = users.reduce((acc, curr) => curr.age >= 30 ? acc : [...acc, curr.firstName + " " + curr.lastName], []);
console.log(usernames2); // ["John Doe", "Sam Brown"]