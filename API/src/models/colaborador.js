const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema ({
    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        enum: ['M', 'F'],
        required: true,
    },
    status: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Colaborador', colaborador);