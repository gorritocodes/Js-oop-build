let Str = "hello"; //string
let number = 1; //number
let bool = true; //boolean
let und = undefined; //undefined

let arr = [1, 2, 3]; //array

// console.log(arr[0], arr[1], arr[2]);
console.log(arr);

class user {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    changeName(name) {
        this.name = name;
    }
}

let user1 = new user("John", 20);
user1.name = "Jorge";
user1.changeName("Ari");
console.log(user1);

const fib = function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : fib(num - 1) + fib(num - 2);
};
