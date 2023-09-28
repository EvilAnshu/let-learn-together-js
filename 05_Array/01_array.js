// Array non-premitive data type (Refrence Data Type)

// const arr = new Array(1,2,3,"str",true);

// const arr = [1,2,3,"str",true];

// console.log(arr.length);


// let arr1= [1,2,3];
// let arr2= [4,5,6];

// let result_arr = arr1.concat(arr2); // concate two arrays and return combined array

// console.log(result_arr);

// const arr = [1,2,3];

// arr.push(4); // add an element to the end of the array
// arr.pop(); // remove an element from the end of the array


// console.log(arr);



// const arr1 = [1,2,3];
// const arr2 = arr1;
// arr2[0]= 23;                 // it changes both arrays

// console.log("First Array : ",arr1);
// console.log("Second Array : ",arr2);


/*
stack                  |                     heap
--------------------------------------------------
premitive              |             non-premitive (refrence)

*/

// let num = 0;
// let str = "abc";

// let num2 = num;

// const arr1 = [1,2,3];
// const arr2 = arr1;  // shollow copy
// arr2[0]= 23;   


// spread operator

// let arr = [1,2,3];
// let arr2 = [...arr]  // deep copy

// arr2[0] = 23

// console.log(arr);
// console.log(arr2);


// Destructuring of an array

// let arr1 = [1,2,3];

// let a = arr1[0];
// let b = arr1[1];
// let c = arr1[2];

// let [a,b,c] = arr1;
// let [a,b,c] = [1,3,4];

// console.log(a, b, c);


// const arr = [1,2,3];

// arr.unshift(7);
// arr.shift();

// console.log(arr);


// const arr = [1,2,3];

// console.log(arr.indexOf(57));


// write a program to remove all duplicates from array

// let arr = [1,2,3,4,3,2,3,4,6];

// [1,2,3,4,6]