const Pool = require("pg").Pool;
const pool= new Pool ({
user: "postgres",
host: "localhost",
database: "excel",
password: "permission",
port: "5432",
});

pool.connect(function(err) 
{
    if (err) throw err;
    console.log("Connected!");
});
module.exports = pool;







// // const PgConnection = require('postgresql-easy');
// // const dbConfig = require('./db');
// // const pg = new PgConnection(dbConfig);






// // const {Pool} = require("pg")
// // const pool= new Pool ({
// // user: 'postgres',
// // host: 'localhost',
// // database: 'excel',
// // password: 'permission',
// // port: '5432',
// // })
// // pool.connect(function(err) 
// // {
// //     if (err) throw err;
// //     console.log("Connected!");
// // });

// // const PgConnection = require('postgresql-easy');
// // const dbConfig = require('./db');
// // const pg = new PgConnection(dbConfig);

// // module.exports = pool;


// // const Pool = require("pg");
// // var connection = pg.connection ({
// // user: "postgres",
// // host: "localhost",
// // database: "excel",
// // password: "permission",
// // port: "5432",
// // });


// //  module.exports = pool;

// // public.knit/excel/postgres@PostgreSQL 15