import db from '../config/database.js'

export const getMessages = (result) => {
    db.query('SELECT * FROM user_message', (err, results) => {
        if(err) {
            console.log(err)
            result(err,null)
        }   else {
            result(null,results)
        }
    })
}

export const newMessage = (data, result) => {
    db.query('INSERT INTO user_message (user_name, user_lastname, user_email, user_text)' +
        'VALUES (?,?,?,?)', [data.user_name, data.user_lastname, data.user_email, data.user_text], (err,results) => {
        if(err) {
            console.log(err)
            result(err,null)
        }   else {
            result(null,results)
        }
    })
}