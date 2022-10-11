import mysql from 'mysql2'

const db = mysql.createConnection({
    host: '146.59.70.220',
    user: 'respe761_user',
    port: '3306',
    password: 'Kalina_22061941',
    database: 'respe761_user'
})
export default db