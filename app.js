const mysql = require('mysql');
const UsersModels = require('./user_model');
// Create a connection to the MySQL database
const dbConfig = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'web_DB'
});

// Connect to the database
dbConfig.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.message);
        return;
    } else {
        console.log('Connected to MySQL database');
    }
});

var runStop = true;
if (runStop)
    var data;
dbConfig.query("select * from users", function (e, result) {
    console.log("result ****** ", typeof result);
    if (e) {
        console.log("err msg *** ", e.message);
    } else {
        // console.log(result);
        if (result == []) {
            console.log("empty");

        } else {
            result.forEach(row => {
                data = (JSON.stringify(row));
                console.log(JSON.parse(data));

            });
        }

    }
});


if (!runStop)
    dbConfig.query("create table users (ids int,email varchar(255),password varchar(255))", function (e, result) {
        if (e) {
            console.log("err table create *** ", e.message);
        } else {
            console.log("tbl create succesful");
        }
    });

var insertResults = []; // Array to store insertion results
if (!runStop) {
    var listUser = [];
    listUser.push(new UsersModels(1, "arun", "123"));
    listUser.push(new UsersModels(2, "vikram", "123"));
    listUser.push(new UsersModels(3, "kabilesh", "123"));
    listUser.push(new UsersModels(4, "gideon", "123"));
    listUser.push(new UsersModels(5, "sooraj", "123"));
    listUser.push(new UsersModels(6, "dinesh", "123"));
    listUser.push(new UsersModels(1, "arun", "123"));
    listUser.push(new UsersModels(2, "vikram", "123"));
    listUser.push(new UsersModels(3, "kabilesh", "123"));
    listUser.push(new UsersModels(4, "gideon", "123"));
    listUser.push(new UsersModels(5, "sooraj", "123"));
    listUser.push(new UsersModels(6, "dinesh", "123"));

    // ######################################################
    listUser.forEach(function (v) {
        dbConfig.query('insert into users(ids,email,password) values(?,?,?)', [v.ids, v.email, v.pwd], function (error, result) {
            if (error) {
                console.log(`Insert data issue: ${error.message}`);
                insertResults.push({ success: false, error: error.message });
            } else {
                // console.log("Insert data process successful.",listUser.length);
                // console.log(`Insert result: ${JSON.stringify(result)}`);
                // insertResults.push({ success: true, result: result });
                insertResults.push(result);
                // console.log(insertResults);
            }
        });
    });
    console.log(`Insert ${listUser.length} data process successful...`);
    dbConfig.off();
}

dbConfig.end();
