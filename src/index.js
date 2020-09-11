const express = require('express')
const Mainpage=require('./route')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req, res)=>{
    return res.json("Hello World!")
})
app.post("/add", (req, res)=>{
    let {num1,num2}=req.body;
    if(typeof(num1)==="string" || typeof(num2)==="string"){
        return res.json({
            message: "invalid data types"
        })
    }
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    if(num1 > parseFloat(1000000) || num2 > parseFloat(1000000)){
        return res.json({
            message: "Overflow"
        })
    }
    return res.json({
        status: "success/failure/error",
        message: "the sum of given two number",
        sum: num1+num2
    })

})
// here
//app.use("",Mainpage)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;