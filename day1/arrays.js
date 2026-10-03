console.log("------ ARRAYS IN JS ------")
let arr1 = [10,33.2,"TT",true];
let arr2 = [17,9,"Thara"]
let newArr = [...arr1, -1, -2, -3, ...arr2];
console.log(newArr);
console.log(newArr[0]);
console.log(newArr[1]);
console.log(newArr[2]);
console.log(newArr[3]);
console.log(newArr[4]);
console.log(newArr[5]);
// console.log(arr1)
// push makes element to add at the end of array
// arr1.push("Tharani")

// pop removes the last Element it dosen't need any parameters
// arr1.pop()

// shift removes element at the 0 index needs no parameters
// arr1.shift()

// unshift adds element at first
// arr1.unshift("Tharani")

// console.log(arr1.length)
