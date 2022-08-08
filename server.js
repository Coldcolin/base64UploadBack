const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors({origin: "*"}))
const url = 'mongodb://localhost/Base-64';
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log(err)
});

app.use("/api", require('./Router/imageRouter'))

app.listen(PORT, ()=>{
    console.log(`listening to PORT: ${PORT}`)
})

