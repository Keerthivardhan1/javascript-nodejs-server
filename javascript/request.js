const request = require("request")

console.log("befour");

request("https://www.google.com" , callback);

function callback(err, responce , html){
        console.log(err);
        console.log(responce);
        console.log(html);
}

console.log("after");


/*
befour 
after 
lot off html ------
*/