const express = require("express");
const app = express();
const port = 3000;
const jsxEngine = require("jsx-view-engine");
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const methodOverride = require('method-override')
const CaptainLogs = require('./models/logs')

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

dotenv.config()
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once("open", ()=>{
    console.log("connected to mongo")
})
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
// app.use(methodOverride('_method'))
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log("I run for all routes")
    next()
})

app.get("/", (req, res) => {
  res.send("Welcome to captains' log");
});

//INDEX ROUTE
app.get("/logs", async(req, res) => {
    try{
        const captainLogs = await CaptainLogs.find()
  res.render('Index', {captainLogs: captainLogs});
    }catch(error){
        console.log(error)
    }
});
//New
app.get("/logs/new", (req, res) => {
  res.render("New");
});
//delete
app.delete('/logs/:id', async(req, res)=>{
    try{
        await CaptainLogs.findByIdAndRemove(req.params.id)
        res.redirect('/logs')
    }catch(error){
        console.error(error)
    }
})
//Create
app.post("/logs", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    await CaptainLogs.create(req.body);
    res.redirect("/logs");
  } catch (error) {
    console.log(error);
  }
});
//edit
app.get('/logs/:id/edit', async(req, res)=>{
   try{ 
    const foundCaptainLogs = await CaptainLogs.findById(req.params.id)
    res.render('Edit', {captainLog: foundCaptainLogs})
   }catch(error){
    console.log(error)
   }
})
//show
app.get('/logs/:id', async(req, res)=>{
    try{
        const captainLog = await CaptainLogs.findById(req.params.id)
        res.render('Show')
    }catch(error){
        console.log(error)
    }
})

app.listen(port, () => {
  console.log("listening");
});
