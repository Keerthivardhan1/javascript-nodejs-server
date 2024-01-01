const { Console } = require('console');
const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));



const USERS = [];
const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];


const SUBMISSION = [

]

app.get('/' , (req , res)=>{
    res.send("This is the home page")
    // console.log(req.body)
})

app.get('/signup' , (req , res)=>{
    // display the index.html 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.get('/home' , (req , res) =>{
  res.sendFile(path.join(__dirname , "public" , "home.html"))
})

/*
app.post('/signup', function(req, res) {
//   const {email , password} = req.body;

  const email = req.body.email;
  const password = req.body.password;


  const userExist = USERS.some((user) => user.email === email);


  if(userExist){
    res.status(400).json({error : "notok", message: "user already exists"});
  }else{
      USERS.push({email, password})
      res.status(400).json({error : "", message: "done user added"});
  }

  Console.log(USERS);

})

*/

app.post('/signup', function(req, res) {
  const { email, password } = req.body;

  const userExist = USERS.some((user) => user.email === email);

  if (userExist) {
    res.status(400).json({ error: "notok", message: "user already exists" });
  } else {
    USERS.push({ email, password });
    res.status(200).json({ error: "", message: "done user added" });
  }

  console.log(USERS);
});


app.post('/login', function(req, res) {
  if (req.body.hasOwnProperty('email') && req.body.hasOwnProperty('password')) {
  const {email , password} = req.body
  if(USERS.some((user)=>{ user.email === email && user.password === password})){
    res.status(200).send("successfully loged in ")
  }
 }

  res.status(400).send("user does no exists")
})

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.json(QUESTIONS).send("this are all the questions")
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
   res.json({
    output : "this is output"
   })
  res.send("Hello World from route 4!")
});


app.post("/submissions", function(req, res) {

   if(req.body.hasOwnProperty("submition")){
    SUBMISSION.push(res.body.submition)
    res.send("submition success")
   }
   res.send("Hello World from route 4!")
});


app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})