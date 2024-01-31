const bodyParser = require('body-parser');
const  express= require('express');
const mongoose = require('mongoose')
const cors=require('cors')
const app= express()
const apiRoute =require('./routes/index')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use('/api',apiRoute)
mongoose.connect('mongodb+srv://mongodb:9410011857@cluster0.ubjhkbn.mongodb.net/userassignmen?retryWrites=true&w=majority').then(
    app.listen(process.env.PORT || "3000",()=>{
        console.log(`server is running port ${process.env.PORT || "3000"} `)
    })
).catch(e=>{
    console.log(e)
})


