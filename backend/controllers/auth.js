const jwt = require('jsonwebtoken')

const models = require('../models')
const user = models.user

exports.login = (req, res)=>{    
    //check if email and pass match in db tbl user
    const email = req.body.email
    const password = req.body.password //use encryption in real world case!

    user.findOne({where: {email, password}}).then(user=>{
        if(user){
            const token = jwt.sign({ id: user.id }, 'token')
            res.send({
                message:"login succeed",
                email,
                token
            }) 
        }else{
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })
}
// const token = jwt.sign({ id: user.id }, 'token')

exports.register = (req, res)=>{    
    //check if email and pass match in db tbl user
    const email = req.body.email
    user.findOne({where: {email}}).then(result=>{
        if(!result){
            user.create(req.body)
            .then(register=>{
                const token = jwt.sign({ id: register.id }, 'token')
                res.send({
                    message : "register succeed",
                    email
                    ,token
                })
            })
        }else{
            res.send({
                error: true,
                message: "Email had been already registered",
                result
            })
        }
    })
}