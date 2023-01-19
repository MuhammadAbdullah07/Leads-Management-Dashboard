const { Console } = require('console');
const {createPool} = require('mysql');
const pool = createPool({
    host : "localhost",
    user : "root",
    port: 3000,
    database:"leads",
});
pool.getConnection((err)=> {
    if(err){
        Console.log("error in db connection");
    }
    Console.log("Connection to db");
});

const executeQuery=(query,arraPrams)=>{
     return new Promise((resolve, reject) => {
        try {
            pool.query(query,arraPrams,(err,data)=>{
                if(err){
                    console.log("errpr on query");
                    reject(err)
                }
                resolve(data);
            });
        } catch (err) {
            reject(err)
        }
     });
}

module.exports = {executeQuery};