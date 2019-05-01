var pool = require('./databaseConfig.js');
var dbifund = {

    register: function (useremail, username, userpass, no_hp, callback) {
        pool.getConnection(function (err, conn) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = 'INSERT INTO tb_user (useremail, username, userpass, no_hp) values (?,?,?,?)';
                conn.query(sql, [useremail, username, userpass, no_hp], function (err, result) {
                    conn.release();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    }
    /* end function register */
};
module.exports = dbifund