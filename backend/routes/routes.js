import express from 'express'

import {showMessages, createMessage} from "../controllers/messages.js";

const router = express.Router()

router.get('/messages', showMessages)
router.post('/messages', createMessage)

export default router