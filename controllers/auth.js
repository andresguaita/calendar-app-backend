const {response} = require('express')



const createUser = (req,res= response)=>{

    const {name, email,password} = req.body

    res.status(201).json({
        ok: true,
        name,
        email,
        password
    })
}

const loginUser= (req,res)=>{
    const {email,password} = req.body

    res.json({
        ok:true,
        msg: 'login',
        email,
        password
    })
}

const tokenRenew = (req,res)=>{
    res.json({
        ok: true,
        msg: 'renew'
    })
}














module.exports = {
    createUser,
    loginUser,
    tokenRenew

}