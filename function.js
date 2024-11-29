const prompt = require('prompt-sync')();
function sum(a,b){
   let z=a+b;      //local varibales 
    console.log("Summation :" +z);
    return z;
}
const mul=(x,y)=>{
    let z=x*y;                                      //arrow funtion
    console.log("Product: ",z);
    return z;
}
let c=+prompt("Enter the first number :");
let d=+prompt("Enter the second number: ");
sum(c,d);
mul(c,d);