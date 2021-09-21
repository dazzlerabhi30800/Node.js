const fs = require('fs');

// fs.readFile('myfile.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })


// const a = fs.readFileSync('myfile.txt');
// console.log(a.toString());

// fs.writeFile("myfile2.txt","This is a message",()=>{
//     console.log("Written");
// })

const a = fs.writeFileSync('myfile2.txt','This is a data');
console.log(a);


    
 console.log('Finish reading file');
