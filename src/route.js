const express=require("express");
const router=express.Router();
router.post("/add/", (req, res)=>{
    const {num1, num2}=req.body;
    console.log(num1);
    if(typeof (num1)=="string" || typeof (num2)=="string"){
        return res.json({
            message: "invalid data types"
        })
    }
    if(num1 >1000000 || num2 > 1000000){
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

router.post("sub", (req, res)=>{
    const {num1, num2}=req.body;
    if(typeof (num1)=="string" || typeof (num2)=="string"){
        return res.json({
            message: "invalid data types"
        })
    }
    if(num1 >1000000 || num2 > 1000000){
        return res.json({
            message: "Underflow"

        })
    }
    return res.json({
        status: "success/failure/error",
        message: "the difference of given two number",
        sum: num1-num2
    })
})
router.post("multiply", (req, res)=>{
    const {num1, num2}=req.body;
    if(typeof (num1)=="string" || typeof (num2)=="string"){
        return res.json({
            message: "invalid data types"
        })
    }
    if(num1 >1000000 || num2 > 1000000){
        return res.json({
            message: "Overflow"

        })
    }
    return res.json({
        status: "success/failure/error",
        message: "The product of given numbers",
        sum: num1*num2
    })
})
router.post("division", (req, res)=>{
    const {num1, num2}=req.body;
    if(num2==0){
        return res.json({
            message: "Cannot divide by zero" 
        })
    }
    
    return res.json({
        status: "success/failure/error",
        message: "the sum of given two number",
        sum: num1+num2
    })
})
router.get("", (req, res)=>{
    return res.json("Hello world!")
})

module.exports=router