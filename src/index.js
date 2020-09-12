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
const checkforSTring=(req, res, next)=>{
    const {num1,num2}=req.body;
    if( typeof num1 ==="string" || typeof num2=="string"){
        return res.json({
            status: `error`,
			message: `Invalid data types`,
        })
    }
    if(isNaN(num1) || isNaN(num2)){
        return res.json({
            status : "error",
            message: "Invalid data types"
        })
    }
    next();
}
app.get("/",(req, res)=>{
    return res.json("Hello World!")
})
app.post("/add", checkforSTring, (req, res)=>{
    let {num1,num2}=req.body;
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    let s=num1+num2;
    if( s > parseFloat(1000000)){
        return res.json({
            status: "error",
            message: "Overflow"
        })
    }
    return res.json({
        status: "success",
        message: "the sum of given two numbers",
        sum: s
    })

})
app.post("/sub", checkforSTring,(req, res)=>{
    let {num1,num2}=req.body;
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    let s=num1-num2;
    if( s < parseFloat(-1000000)) {
        return res.json({
            status:"error",
            message: "Underflow"
        })
    }
    return res.json({
        status: "success",
        message: "the difference of given two numbers",
        sum: s
    })

})
app.post("/multiply", checkforSTring, (req, res)=>{
    let {num1,num2}=req.body;
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    let s=num1*num2;
    if( s > parseFloat(1000000)){
        return res.json({
            status: "error",
            message: "Overflow"

        })
    }
    return res.json({
        status: "success",
        message: "The product of given numbers",
        sum: s
    })

})
app.post("/division",checkforSTring, (req, res)=>{
    let {num1,num2}=req.body;
    if( num2 === 0 ){
        return res.json({
            status: "error",
            message: "Cannot divide by zero"
        })
    }
    return res.json({
        status: "success",
        message: "The division of given numbers",
        sum: parseFloat(num1/num2)
    })

})

// here
//app.use("",Mainpage)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;