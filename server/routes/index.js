const express =require('express');
const route=express.Router()
const controller =require('../controllers/index')

route.post('/createUsers',controller.createUser)
route.get('/getUsers',controller.getUser)
route.put('/edituser/:id',controller.edituser)

module.exports = route;