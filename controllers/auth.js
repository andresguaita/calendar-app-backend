const {response} = require('express')


const createUser = (req,res= response)=>{

    const {name, email,password} = req.body

    res.json({
        ok: true,
        name,
        email,
        password
    })
}

const loginUser= (req,res)=>{
    res.json({
        ok: true,
        msg: 'Login'
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