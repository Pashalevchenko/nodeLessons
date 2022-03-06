const path = require("path");
const express = require("express")
const expressHbs = require("express-handlebars")

const app = express();

const pathToPages = path.join(__dirname, "pages")
console.log(pathToPages)

app.engine('.hbs', expressHbs.engine({defaultLayout: false}));
app.set('view engine', '.hbs');
app.set('views', pathToPages);

app.get("/login", (req, res)=>{
    res.render("login")
})

app.listen("5000", ()=>{
    console.log("App run")
})