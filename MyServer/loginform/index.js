/* ===================================Common For All Server Side============================================= */


const express = require("express")
const port = 3000;
const path = require("path")
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


/* ================================================================================ */


app.get("/" , (req , res)=>{
    res.send("this is the starting rout ===>   /  ")
})

app.get("/htmlpage" , (req , res)=>{
    console.log("html page is trying to display");
    console.log("html page is displayed");

    res.sendFile(path.join(__dirname, './', 'index2.html'));
})

app.get("/homepage2" , (req,res)=>{
    console.log("get request of the homepage 2 is came to server");
    res.sendFile(path.join(__dirname , './' , 'home2.html'))
})

app.post("/homepage2" , (req , res)=>{
    console.log("------ req body =----" , req.body)
    res.json("done")
})

app.post("/login" , (req ,  res)=>{
    console.log(" login post request is came in server   " , req.body);
    const email = req.body.email;
	const password = req.body.password;
    console.log("email : " , email , " passward " , password);
    res.sendFile(path.join(__dirname, './', 'Home.html'));

})

app.listen(port, ()=>{
    console.log(`app is listing at ${port}`);
});