var db = require('../db');

var Pessoa = {
    getpessoas: function (callback) {
        return db.query('SELECT * from Pessoa', callback);
    },
    createpessoa: function (Pessoa, callback) {
        return db.query('Insert into Pessoa(cpf, nome) values(?, ?)', [Pessoa.cpf, Pessoa.nome], callback);
    },
    deletepessoa: function (Pessoa, callback) {
        return db.query('DELETE from Pessoa WHERE cpf = ?', [Pessoa.cpf], callback);
    }
}

module.exports = Pessoa;