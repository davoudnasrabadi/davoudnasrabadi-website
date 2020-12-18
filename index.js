const express = require('express');
const config = require('./config');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser= require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.get('/',(req,res)=>{
   res.status(200).json({message:'Ok'});
})
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','dist','index.html'));
    })
}
app.listen(config.PORT,()=>console.log('Server is running on port '+config.PORT));