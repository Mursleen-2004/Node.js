const fs = require('fs')

//Synchronus: A synchronus programming is performed one by one--if one task complete its execution succesfully, then next task will be excecuted. 

/*Asynchronus: Asynchronus means multiple task performed in same time---non-blocking i/o sysytem---Suppose! we have
 settimout function and we set the time 5s ...in this 5s time period js will execute next tasks after the settimeout function.*/

 //create a new sync file--
console.log(fs.writeFileSync('test.txt','Hello i am musa'));

//to read the file--
console.log(fs.readFileSync('test.txt','utf-8'))

//to override/change the file--
console.log(fs.appendFileSync('test.txt',' i am from multan'));
