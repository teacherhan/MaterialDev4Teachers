const express = require('express');
const app = express();
const fs = require("fs");
const multer = require('multer');
const Tesseract= require('tesseract.js');
const worker = Tesseract.createWorker();

const storage = multer.diskStorage({
    destination: (req, file,cb)=>{
        cb(null, "./uploads");
    },
    
});

const upload = multer({storage: storage}).single("Thor");
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render("index");
});


app.post("/upload", (req, res) =>{
    upload(req, res, err => {
        console.log(req.file)
    });
});

// start the server

const PORT = 5000|| process.env.PORT;

app.listen(PORT, () =>console.log(`server started on port ${PORT}`));

