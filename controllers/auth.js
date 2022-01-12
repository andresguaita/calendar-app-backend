const bcryptjs = require('bcryptjs')
const {response} = require('express')
const User = require('../models/User')



const createUser = async(req,res= response)=>{

    const {email,password} = req.body

    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                ok: false,
                msg: `An account with email ${email} already exists`
            })
        }
         user = new User(req.body)

         const salt = bcryptjs.genSaltSync()

         user.password = bcryptjs.hashSync(password, salt)

         await user.save()

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Please contact your system administrator'
        })
    }

    
}

const loginUser= async(req,res)=>{
    const {email,password} = req.body
    
    try {

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect email or password'
            })
        }

        const validPassword= bcryptjs.compareSync(password,user.password)

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect email or password'
            })
        }

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Please contact your system administrator'
        })
    }

    
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