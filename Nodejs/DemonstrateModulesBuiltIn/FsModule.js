
// senchonuous 

const fs= require('fs')

// let buffer = fs.readFileSync("OsModule.js");

// console.log(buffer);

// fs.writeFileSync("filename" , data);
// fs.openSync("file name " , "w");

// creat

fs.openSync("abc1.txt" , "w");

// write the content 
fs.writeFileSync("abc1.txt" , "this is something ")    // this will replace every time

// updata

fs.appendFileSync("abc1.txt" , "this is something2");   // add at the last

// mkdir
// fs.mkdirSync("mydir");    // we should run secound becasuse the dir is already created
// fs.writeFileSync("mydir/myfile.txt" , "my text");

let content = fs.readdirSync("mydir");

console.log(content);

console.log(typeof(content))

// try{
// fs.unlinkSync("mydir/" + content[0]);   // to remove file   // 

// }catch(e){
//     console.log(e);
// }

fs.rmdirSync("mydir");