const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({

    email : {
        type: String,
        required : true
    },

    senha : {
        type : String,
        required : true
    },

    apelido : {
        type : String,
        required : true
    },

    telefone : {
        type : Number,
        required : false
    },

    notifica_email : {
        type : String,
        required : false
    },
    notifica_sms : {
        type : String,
        required : false
    },
    notifica_whatsapp : {
        type : String,
        required : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

mongoose.model("usuarios",UsuariosSchema);