const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async (req, res)=>{
    try{
    // console.log('Get Request')
    // res.send('<h1>Get Request</h1>')
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send("Error ..."+err);
    }
})

router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    console.log(alien)
    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router