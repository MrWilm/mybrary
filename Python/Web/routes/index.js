const express = require('express')
const router = express.Router()

router.get('/', (erq, res) => {
    res.render('index')
})

module.exports = router