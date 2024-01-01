const fs = require("fs");
// console.log("before");

// let data = fs.readFileSync("f1.txt");

// console.log( "data is "+data);
// console.log( "after")


// async
console.log("before");

fs.readFile("f1.txt" , cb);

function cb(err , data){
    console.log("cb is called")
    if(err){
        console.log(err);
    }else
    console.log(""+data);
}
console.log( "after")
console.log( "mean while ")

/*
out put is 
before
after
mean while
cb is called
this is file   <------

*/
