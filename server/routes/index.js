const express =require('express');
const route=express.Router()
const controller =require('../controllers/index')

route.post('/createUsers',controller.createUser)
route.get('/getUsers',controller.getUser)
route.patch('/edituser/:id',controller.edituser)
route.delete('/userdelete/:id',controller.deleteUser)


module.exports = route;