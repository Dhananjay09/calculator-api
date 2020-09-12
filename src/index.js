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

const checkType = (req, res, next) => {
	const { num1, num2 } = req.body;

	if (typeof num1 === "string" || typeof num2 === "string") {
		return res.json({
			status: `error`,
			message: `Invalid data types`,
		});
	}

	next();
};

app.get("/",(req, res)=>{
    return res.json("Hello World!")
})




app.post('/add',checkType,(req,res)=>{
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    if(isNaN(num1)||isNaN(num2)){
        return  res.json({
            status:"error",
            message:"Invalid data types",
            
        })  
    }
    
    else if(num1+num2>1000000){
       return res.json({
            status:"error",
            message:"Overflow",
           
        })   
    }
    else
    return res.json({
        status:"success",
        message:"the sum of given two numbers",
        sum:num1+num2
    })
    
    })
    





app.post('/sub',checkType,(req,res)=>{
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    if(isNaN(num1)||isNaN(num2)){
        return  res.json({
            status:"error",
            message:"Invalid data types",
            
        })  
    }
    
    

    else if (num1 - num2 < -1000000) {
		return res.json({
			status: `error`,
			message: `Underflow`,
        });
    }
    else
    return res.json({
        status:"success",
        message:"the difference of given two numbers",
        difference:num1-num2
    })
    
    })
app.post('/multiply',checkType,(req,res)=>{
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    if(isNaN(num1)||isNaN(num2)){
        return   res.json({
            status:"error",
            message:"Invalid data types",
            
        })  
    }
    
    else if(num1*num2>1000000){
        return   res.json({
            status:"error",
            message:"Overflow",
           
        })   
    }
    else
    return  res.json({
        status:"success",
        message:"The product of given numbers",
        result:num1*num2
    })
    
    })
app.post('/divide',checkType,(req, res) => {
    const { num1, num2 } = req.body;

    if (num2 === 0) {
        return res.json({
            status: `error`,
            message: `Cannot divide by zero`,
        });
    }
    const result = num1 / num2;

    if (result > 1000000) {
        return res.json({
            status: `error`,
            message: `Overflow`,
        });
    }

    return res.json({
        status: `success`,
        message: `The division of given numbers`,
        result,
    });

});


// here
//app.use("",Mainpage)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;