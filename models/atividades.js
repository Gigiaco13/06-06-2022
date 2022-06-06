const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega:String,
    disciplina:String,
    instrucoes:String,
    usuario:String,
    titulo:String
})

const atividades = mongoose.model('atividades',modelo)

module.exports = atividades