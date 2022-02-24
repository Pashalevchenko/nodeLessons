const fs = require("fs");
const path = require("path");

const folder1800 = path.join(__dirname, "1800");
const folder2000 = path.join(__dirname, "2000");

// Перемесщение всех файлов с полем gender.male в папку 20000
fs.readdir(folder1800, (err, files)=>{
    if(err){
        console.log(err)
    }
    files.forEach(data=>{
        const pathFile = path.join(folder1800, data)
        fs.readFile(pathFile, (err, person)=>{
            const personGender = JSON.parse(person).gender
            if(personGender === "female"){
                const newPath = path.join(folder2000, data)
                fs.rename(pathFile, newPath, err=>{
                    console.log(err)
                })
            }
        })
    })
})

// Перемесщение всех файлов с полем gender.male в папку 1800 
fs.readdir(folder2000, (err, files)=>{
    files.forEach(person =>{
        const filePath = path.join(folder2000, person)
        fs.readFile(filePath, (err, data)=>{
            const personGender = JSON.parse(data).gender
            if(personGender === "male"){
                const newPath = path.join(folder1800, person)
                fs.rename(filePath, newPath, err=>{
                    console.log(err)
                })
            }
        })
    })
})