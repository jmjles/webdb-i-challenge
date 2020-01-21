const express = require('express')
const route = express.Router()
const {all,account,addAccount,deleteAccount} = require('../data/db')

route.get('/', async (req,res) => res.status(200).json(await all))

route.get('/:name', async(req,res) => {
    const name = req.params.name
    res.status(200).json(await account(name))
})

route.post('/',async (req,res)=>{
    const {name,budget} = req.body
    if (!name || !budget) return res.status(400).json({error:'Add a name and budget'})
    res.status(201).json(await addAccount({name,budget}))
})

route.delete('/:name', async (req,res)=> {
    const name = req.params.name
    res.status(201).json(await deleteAccount(name))
})
module.exports = route