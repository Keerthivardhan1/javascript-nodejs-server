const request = require("request")
const cheerio = require("cheerio");
console.log("befour--");
request("https://www.worldometers.info/coronavirus/" , callback);

function callback( error , responce , html){
    if(error)
    console.log(error);
    else
    handlehtml(html);

}

function handlehtml(html){
    let seltool = cheerio.load(html);

    // let h1s = seltool("h1");

    // console.log(h1s.length);
    // console.log(h1s);

    // [i] --> wrape in seltool

    let contentArr =  seltool("#maincounter-wrap span");

    for(let i=0;i<contentArr.length ;i++){
        let data = seltool(contentArr[i]).text();
        console.log("data " , data);
    }


}

console.log("after--")