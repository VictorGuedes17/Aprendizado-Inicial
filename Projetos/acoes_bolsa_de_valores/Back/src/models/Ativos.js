const mongoose = require('mongoose');

const AtivosSchema = new mongoose.Schema({
    codigo : { 
        type : String,
        max : 6,
        required : true,
        unique : true   
    },
    cotacao : {
        type : String,
        required : false
    },
    dicionario : {
        type : String,
        required : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

mongoose.model('ativos',AtivosSchema);