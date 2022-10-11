import {getMessages, newMessage} from "../models/messageModels.js";

export const showMessages = (req, res) => {
    getMessages((err, result) => {
        if(err) {
            res.send(err)
        }   else {
            res.json(result)
        }
    })
}

export const createMessage = (req, res) => {
    const data = req.body

    newMessage(data, (err, results) => {
        if (err) {
            res.send(err)
        }   else {
            res.json(results)
        }
    })
}