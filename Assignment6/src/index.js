const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


// dotenv.config();
//connect to DB
mongoose.connect('mongodb+srv://2811421Ds:2811421Ds@cluster0.pztss3h.mongodb.net/').then((response)=>{
    console.log("DB is Connected")
}).catch((err)=>{
    console.log(err)
})

mongoose.Promise = global.Promise;


app.listen(3000, () => console.log('Server running......'));

