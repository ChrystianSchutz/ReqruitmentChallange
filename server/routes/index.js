const express = require('express')
const router = express.Router()
const handleNotesWithdrawal = require('../models/handleNotesWithdrawal')


router.post('/', (req, res) => {
    const response = handleNotesWithdrawal(req.body.sum)
    if(response.error){
        return res.status(400).json(response)
    }
    res.json( response)
})

module.exports = router;