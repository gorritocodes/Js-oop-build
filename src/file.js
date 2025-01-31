// let Str = "hello"; //string
// let number = 1; //number
// let bool = true; //boolean
// let und = undefined; //undefined

// let arr = [1, 2, 3]; //array

// // console.log(arr[0], arr[1], arr[2]);
// console.log(arr);

// class user {
//     name;
//     age;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     changeName(name) {
//         this.name = name;
//     }
// }

// let user1 = new user("John", 20);
// user1.name = "Jorge";
// user1.changeName("Ari");
// console.log(user1);

// 1 1 2 3 = Fibonacci -2  5 = fibonacci 8 - 1 8

// a recursive fibonacci function

function fibonacci(n) {
    if (n < 2) {
        // console.log(1);
        return 1;
    }
    console.log(fibonacci(n - 1) + fibonacci(n - 2));
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3));

// merge problem

const fib = function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : fib(num - 1) + fib(num - 2);
};
