const express = require("express");
const expressHbs = require("express-handlebars");
const path = require("path")

const users = require("./usersDb")

const app = express();
const statucFolder = path.join(__dirname, "static")

// Научить читать JSON который приходить с инпутов
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use(express.static(statucFolder))
app.set("view engine", ".hbs");
app.engine(".hbs", expressHbs.engine({ defaultLayout: false }))
// Указываем с какой папки будут взяты страницы для рендера
app.set("views", statucFolder)

console.log(users)

app.get("/", (req, res)=>{
    console.log(req)
    // res.json({
    //     name: "Dimass",
    //     age: 25
    // })

    res.status(418).end("Not")
})
// Роуты
app.get("/users", (req, res)=>{
    // Передача параметров в .hbs фаил
    res.render("users", {userName: "Dimass", users})
})

app.get("/users/:user_id", (req, res)=>{
    const {user_id} = req.params
    const currentUser = users[user_id];

    if(!currentUser){
        res.status(404).end("User not found")
        return;
    }

    res.json(currentUser)

})

app.get("/login", (req, res)=>{
    res.render("login")
})

app.post("/auth", (req, res)=>{
    // Получить данные с инпута
    console.log(req.body);
    res.json("Ok")
})

// Запуск сервера на хосте 5000
app.listen(5000, ()=>{
    console.log("App 5000 running")
})