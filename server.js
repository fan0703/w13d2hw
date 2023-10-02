const express = require("express");
const app = express();
const port = 3000;
const jsxEngine = require("jsx-view-engine");
const mongoose = require('mongoose')
const dotenv = require("dotenv")
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
  res.render(Index);
    }catch(error){
        console.log(error)
    }
});
//New
app.get("/logs/new", (req, res) => {
  res.render("New");
});
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

app.listen(port, () => {
  console.log("listening");
});
