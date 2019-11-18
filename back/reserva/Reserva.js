var db = require('../db');

var Reserva = {
    /*getcidades: function (callback) {
        return db.query('SELECT * from Cidade', callback);
    },*/
    getreservas: function (callback) {
        return db.query('SELECT * from Reserva', callback);
    },
    createreserva: function (Reserva, callback) {
        return db.query('Insert into Reserva(idReserva,cidOri,cidDest,dataIda,dataVolta) values(?, ?)',
         [Reserva.idReserva,cidOri,Reserva.cidDest,Reserva.dataIda,Reserva.dataVolta], callback);
    },
    deletereserva: function (Reserva, callback) {
        return db.query('DELETE from Reserva WHERE idReserva = ?', [Reserva.idReserva], callback);
    }
}

module.exports = Reserva;