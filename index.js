const fs = require('fs');

const c = fs.readFile('test.txt','utf-8',(error,result)=>{

if(error){
console.log(error);}

console.log(result)
})