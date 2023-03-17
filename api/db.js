import mysql from "mysql"

//Config do BD -


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "db_projeto",
});