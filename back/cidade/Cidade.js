var db = require('../db');

var Cidade = {
    getcidades: function (callback) {
        return db.query('SELECT * from Cidade', callback);
    },
    createcidade: function (Cidade, callback) {
        return db.query('Insert into Cidade(id, nome) values(?, ?)', [Cidade.id, Cidade.nome], callback);
    },
    deletecidade: function (Cidade, callback) {
        return db.query('DELETE from Cidade WHERE nome = ?', [Cidade.nome], callback);
    }
}

module.exports = Cidade;