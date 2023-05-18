const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barbearia = new Schema ({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório']
    },
    senha: {
        type: String,
        default: null
    },
    telefone: String,
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String
    },
    geo: {
        tipo: String,
        coordinates: Array
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

barbearia.index({ geo: '2dsphare' })

module.exports = mongoose.model('Barbearia', barbearia);