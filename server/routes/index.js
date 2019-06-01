const express = require('express')
const router = express.Router()
const handleNoteWithdraw = require('../models/handleNoteWithdraw')


router.post('/', (req, res) => {
    const response = handleNoteWithdraw(req.body.sum)
    if(response.error){
        return res.status(400).json(response)
    }
    res.json( response)
})

module.exports = router;