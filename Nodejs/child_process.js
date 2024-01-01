let cp = require("child_process");
console.log("opening calculater");
cp.execSync("calc");    // this will open calculater

cp.execSync("code");    // open vs code

cp.execSync("start chrome www.google.com");   // open chrome

console.log("opened");