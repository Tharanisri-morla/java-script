// different types of functions

//1. function declaration
 function my_fun(num1,num2){
    return num1 + num2;
}
console.log(my_fun(10,12))


//  function expression

const addition = function(num1,num2){
    return num1 + num2;
};

console.log(addition(10,2));


// arrow function



const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(10, 2));
// smipler version of arrow function

const addd = (num1,num2) => num1 + num2;


console.log(addd(10, 2));



