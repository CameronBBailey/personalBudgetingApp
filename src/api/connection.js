const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password1234",
    database: "Personal_Budgeting_App"
})

module.exports = client