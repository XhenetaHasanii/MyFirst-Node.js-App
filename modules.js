const xyz=require('./people');
console.log(xyz.people,xyz.ages);

//Another way to access variables 
const {people, ages}= require('./people');
console.log(people,ages);

const os=require('os');
console.log(os.platform(),os.homedir());
