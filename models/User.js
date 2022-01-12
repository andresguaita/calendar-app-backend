const {Schema, model} = require('mongoose')

const ShemaUser = Schema({
    name : {
        type: String,
        require: true
    },

    email : {
        type: String,
        require: true,
        unique: true
    },

    password : {
        type: String,
        require: true
    }  
})

module.exports= model('User', ShemaUser)