const list = [];
let user1 = { name: "Alice", age: 30 };
let user2 = { name: "Bob", age: 25 };
let user3 = { name: "Charlie", age: 35 };
let user4 = { name: "Diana", age: 28 };
let user5 = { name: "Eve", age: 22 };
let user6 = { name: "Frank", age: 40 };
let user7 = { name: "Grace", age: 27 };
let user8 = { name: "Hank", age: 33 };
let user9 = { name: "Ivy", age: 29 };
let user10 = { name: "Jack", age: 31 };
let user11 = { name: "Kathy", age: 26 };
let user12 = { name: "Leo", age: 34 };
let user13 = { name: "Mona", age: 24 };

list.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13);


function filterByAge(minAge) {
    return list.filter(user => user.age >= minAge);
}

console.table(filterByAge(30)); // [{ name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
console.table(list); // [{ name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]