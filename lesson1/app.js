const fs = require("fs");
const path = require("path");
const util = require("util")
const dirPath = path.join(__dirname, 'dir')

// Записать фаил
// const filePath = path.join(__dirname, 'dir', 'text.txt')
// fs.writeFile(filePath, "hello", (err)=>{
//     console.log(err)
// })


// Добавить к файлу
// fs.appendFile(filePath, "dude", err=>{
//     if(err){
//         console.log(err)

//     }
//     console.log("Done \n")
// })


// Создать папку
// fs.mkdir(path.join(__dirname, "dir", "folder2"),{recursive: true}, err=>{
//     console.log(err)
// })

// Прочитать фаил
// const readFile = path.join(__dirname, "fileRemoved.js");
// fs.readFile(readFile, (err, data)=>{
//     console.log(data.toString())
        // Для JSON
        // console.log(JSON.parse(data))
// })

// Прочитать файлы в папке
// fs.readdir(dirPath, (err, data)=>{
//     // console.log(data)
//     data.forEach(file=>{
//         fs.stat(dirPath, (err, status)=>{
//             console.log("--------------------------")
//             console.log(status.isFile())
//             console.log(status.isDirectory())
//             console.log(status.size)
//             // console.log(status)
//             console.log("--------------------------")
//         })
//     })
// })

// Удалить папку
// fs.rmdir(path.join(__dirname,"dir", "folder1"), err=>{
//     console.log(err)
// })

// Удалить фаил
// fs.unlink(path.join(__dirname, "dir", "text.txt"), err=>{
//     console.log(err)
// })

// Переместить фаил и переименовать
// const oldPath = path.join(__dirname, 'dir', "file.js")
// const newPath = path.join(__dirname, 'fileRemoved.js')
// fs.rename(oldPath, newPath, err=>{
//     console.log(err)
// })

// Промисификация функций
// const promisFunction = util.promisify();

