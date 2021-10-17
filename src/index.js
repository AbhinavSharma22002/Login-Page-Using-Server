const fs = require('fs');
const express = require('express');
const fortunes = require(__dirname+'/../data/fortunes.json');
const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
let nodemailer = require('nodemailer');
const MongoClient = require('mongodb').MongoClient;
const Db = 'mongodb+srv://abhinav_22002:gudan1232002@cluster0.y0xrk.mongodb.net/User_Info?retryWrites=true&w=majority';




app.get('/', (req, res) => {
  fs.readFile(__dirname+'/../index.html',function (err, data) {
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
   });


app.get('/css/bootstrap.min.css', (req,res)=>{
  fs.readFile(__dirname+'/../css/bootstrap.min.css',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/css'});
    res.write(data);
    res.end();
  });
});


app.get('/css/styles.css', (req,res)=>{
  fs.readFile(__dirname+'/../css/styles.css',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/css'});
    res.write(data);
    res.end();
  });
});


app.get('/js/jquery.min.js', (req,res)=>{
  fs.readFile(__dirname+'/../js/jquery.min.js',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/javascript'});
    res.write(data);
    res.end();
  });
});


app.get('/js/bootstrap.min.js', (req,res)=>{
  fs.readFile(__dirname+'/../js/bootstrap.min.js',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/javascript'});
    res.write(data);
    res.end();
  });
});


app.get('/js/ajax-utils.js', (req,res)=>{
  fs.readFile(__dirname+'/../js/ajax-utils.js',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/javascript'});
    res.write(data);
    res.end();
  });
});


app.get('/js/script.js', (req,res)=>{
  fs.readFile(__dirname+'/../js/script.js',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/javascript'});
    res.write(data);
    res.end();
  });
});

app.get('/images/ajax-loader.gif', (req,res)=>{
  fs.readFile(__dirname+'/../images/ajax-loader.gif',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'image/jpg'});
    res.write(data);
    res.end();
  });
});


app.get('/data/fortunes.json', (req,res)=>{
  fs.readFile(__dirname+'/../data/fortunes.json', 'utf-8', (err, data) => {
    if (err) throw err;
    req.responseText=JSON.parse(data);
    res.write(data);
    res.end();
  });
});

app.get('/fonts/glyphicons-halflings-regular.woff2', (req,res)=>{
  fs.readFile(__dirname+'/../fonts/glyphicons-halflings-regular.woff2',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/woff2'});
    res.write(data);
    res.end();
  });
});

app.get('/fonts/glyphicons-halflings-regular.wofff', (req,res)=>{
  fs.readFile(__dirname+'/../fonts/glyphicons-halflings-regular.wofff',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/wofff'});
    res.write(data);
    res.end();
  });
});

app.get('/fonts/glyphicons-halflings-regular.ttf', (req,res)=>{
  fs.readFile(__dirname+'/../fonts/glyphicons-halflings-regular.ttf',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/ttf'});
    res.write(data);
    res.end();
  });
});


app.get('/snippet/home-snippet.html', (req,res)=>{
  fs.readFile(__dirname+'/../snippet/home-snippet.html',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});

app.get('/snippet/home-snippet-2.html', (req,res)=>{
  fs.readFile(__dirname+'/../snippet/home-snippet-2.html',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});

app.get('/snippet/home-snippet-3.html', (req,res)=>{
  fs.readFile(__dirname+'/../snippet/home-snippet-3.html',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});

app.get('/snippet/home.html', (req,res)=>{
  fs.readFile(__dirname+'/../snippet/home.html',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});


app.get('/LOGIN.html', (req, res) => {
  fs.readFile(__dirname+'/../LOGIN.html', function (err, data) {
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});

app.get('/SIGN.html', (req, res) => {
  fs.readFile(__dirname+'/../SIGN.html',function (err, data) {
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});

app.get('/images/img3.jpg', (req,res)=>{
  fs.readFile(__dirname+'/../images/img3.jpg',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'image/jpg'});
    res.write(data);
    res.end();
  });
});

app.get('/snippet/process.html', (req,res)=>{
  fs.readFile(__dirname+'/../snippet/process.html',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});




app.get('/ABOUT.html', (req, res) => {
  fs.readFile(__dirname+'/../ABOUT.html', function (err, data) {
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});

const writeFortunes = json => {
  // fs.writeFile(__dirname+'/../data/fortunes.json', JSON.stringify(json), err => console.log(err));
  // console.log(json);
  MongoClient.connect(Db,function(err,db){
      if(err) throw err;
      let dbo= db.db("User_Info");
      dbo.collection("User").insertOne(json,function(err,res){
          if(err) throw err;
          console.log("1 document inserted");
          db.close();
      });
  });

};

let username = "";
let password = "";
let email = "";
let otp;
app.post('/process_pos', function (req, res) { 
   username = req.body.username;
  password = req.body.password;
   email = req.body.email;
  otp = Math.floor(100000 + Math.random() * 900000);

   let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jiofi22002@gmail.com',
      pass: 'vipin321@2002'
    }
  });
  
  let mailOptions = {
    from: 'jiofi22002@gmail.com',
    to: `${email}`,
    subject: 'Authentication OTP for faltu_sever',
    text: `You're receiving this e-mail because you or someone else has requested for an account creation with this mail id and user name ${username}.\n Please use this otp ${otp}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  //onclick="$dc.submit1(document.getElementById('u1'),document.getElementById('u2'))"
  fs.readFile(__dirname+'/../process_pos.html', function (err, data) {
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});

app.post('/check',(req,res)=>{
  if(req.body.OTP==otp){

  let latset= {"username":username,"password":password,"email":email}; 

  // const fortune_ids = fortunes.map(f => f.username);

  // const new_fortunes = fortunes.concat(latset);
  // console.log(new_fortunes);

  writeFortunes(latset);

  y = "successfully submitted!!!";
  }
  else{
    y = "not submitted!!";
  }

  fs.readFile(__dirname+'/../snippet/check.html', function (err, data) {
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });

});



app.post('/process_pos1', function (req, res) { 
  let u = req.body.username;
   let p = req.body.password;

   console.log(u+"   "+p);

   MongoClient.connect(Db, function(err, db) {
    if (err) throw err;
    var dbo = db.db("User_Info");
    dbo.collection("User").findOne({"username":`${u}`}, function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
 
 fs.readFile(__dirname+'/../snippet/process_pos1.html', function (err, data) {
   if(err) console.log(err);
   res.writeHead(200,{'Content-Type':'text/html'});
   res.write(data);
   res.end();
 });
});

module.exports = app;