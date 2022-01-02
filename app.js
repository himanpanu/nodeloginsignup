const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./connect');
const User = require("./models/User");

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.post('/signin', async(req, res) => {
    const user = await User.findOne({ username: req.body.username, password: req.body.password })
    if(user){
        res.send("welcome back")
    }else {
        res.send("user not found")
    }
})

app.post('/signup', async(req, res) => {
    const user = await User.create(req.body)
    if(user){
        res.send("Congrats, you are signed up")
    }else {
        res.send("user not created")
    }
})

app.get('/signup', async(req, res) => {
    res.redirect('/signup.html')
})


const port = process.env.PORT || 5500;

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log("app is listening on port 5000");
        })
    }catch(error){
        console.log(error);
    }
}

start();

