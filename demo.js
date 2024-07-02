// console.log("Hello world"); 
// var a:number;
// a=5;
// console.log(a);
// let nameVar: string = "Vivek";
// console.log(nameVar)
// const a:number = 5;
// console.log(a)
//arry
// const a:number[]=[1,2,3,4,5,6,7];
// console.log(a);
// const a:string[]=['a','b','c'];
// console.log(a);
//you can add any data using any array
// const a:any[]=['a','b','c',12,15];
// console.log(a);
// Define an object with TypeScript
// let person: { name: string; age: number } = {
//     name: "John",
//     age: 30,
//   };
//   // Accessing object properties
//   console.log(person.name); // John
//   console.log(person.age); // 30
// Define an array of numbers
// let numbers: number[] = [1, 2, 3, 4, 5];
// // Iterate over the array
// numbers.forEach((num) => console.log(num));
// // Define an array of objects
// let users: { name: string; age: number }[] = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 32 },
// ];
// // Access array elements
// users.forEach((user) => console.log(user.name, user.age));
// Define a custom type
// type User = {
//     name: string;
//     age: number;
//     isActive: boolean;
//   };
//   // Use the custom type
//   let user: User = {
//     name: "Alice",
//     age: 25,
//     isActive: true,
//   };
//   console.log(user.name); // Alice
//   console.log(user.age); // 25
//   console.log(user.isActive); // true
// Let and Const
// let a = 10;
// const b = 20;
// // Arrow Functions
// const add = (x: number, y: number): number => x + y;
// console.log(add(a, b)); // 30
// // Template Literals
// const name = "John";
// const greeting = `Hello, ${name}!`;
// console.log(greeting); // Hello, John!
// // Destructuring
// const userObj = { name: "Alice", age: 25 };
// const { name: userName, age: userAge } = userObj;
// console.log(userName); // Alice
// console.log(userAge); // 25
// // Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2); // [1, 2, 3, 4, 5]
// Create a Promise
// const myPromise = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve(42);
//       } else {
//         reject("Error occurred");
//       }
//     }, 1000);
//   });
//   // Using the Promise
//   myPromise
//     .then((value) => {
//       console.log("Promise resolved with value:", value); // Promise resolved with value: 42
//     })
//     .catch((error) => {
//       console.error("Promise rejected with error:", error);
//     });
