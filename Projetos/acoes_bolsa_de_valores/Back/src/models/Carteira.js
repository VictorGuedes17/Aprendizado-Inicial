const mongoose = require('mongoose');
const CarteiraSchema = mongoose.Schema({

    iduser : {
        type: String,
        required : true
    },
    
    ativo : {
        type : String,
        required : true
    },

    quantidade : {
        type: Number,
        require: true
    },

    data_entrada: {
        type : Date,
        required : true
    },

    valor_entrada: {
        type: Number,
        required : true
    },

    data_saida: {
        type: Date,
        required: false
    },

    valor_saida: {
        type: Number,
        required : false
    },

    resultado: {
        type : Number,
        required : false
    },

    createdAt : {
        type: Date,
        default : Date.now
    },
    
    updatedAt : {
        type: Date,
        default : Date.now
    }
});

    CarteiraSchema.pre('save',function(next){
        this.updatedAt = Date.now();
        return next();
    });


mongoose.model('carteira',CarteiraSchema);