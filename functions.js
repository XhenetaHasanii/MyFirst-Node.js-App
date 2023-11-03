//Created greet function
const greet = (test) => {
    console.log(`hello, ${test}`);
}
//Called greet function
greet('mario');
greet('yoshi');

//Created sayHi function
function sayHi()
{
 console.log("Hi")
}
//Called sayHI function
sayHi();

//Created sum function
function sum(a,b){
    console.log(a+b);
}
//Called sum function
sum(1,2);

//Created sum function
function sum(a,b)
{
    console.log(b);
    console.log(a);
}
//Called sum function
//It doesn't throw any errors
sum(1);


function sum(a,b)
{
    return a+b;

}
const value=sum(1,3);
console.log(value);



