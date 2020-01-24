var connection = require("./connection.js");

var orm = {
    selectAll: function(selectFrom){
        var query = `SELECT * FROM ??`;
        connection.query(query, [selectFrom], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    },

    insertOne: function(db, table, argOne, argTwo, valueOne, valueTwo){
        var query = `USE ?? INSERT INTO ??(?, ?) VALUES(?, ?)`;
        connection.query(query, [db, table, argOne, argTwo, valueOne, valueTwo], function(err, result) {
            if (err) throw err;
            console.log(result);
        })

    },
    
    updateOne: function(db, table, propOne, valOne, propTwo, valTwo, burgerID){
        var query = `USE ?? UPDATE ?? SET ?? = '??', ??= '??' WHERE id = ??`;
        connection.query(query, [db, table, propOne, valOne, propTwo, valTwo, burgerID], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    }
};

module.exports = orm;