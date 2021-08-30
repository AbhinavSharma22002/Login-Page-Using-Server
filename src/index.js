const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const fortunes = require('../data/fortunes');

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

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
    res.jsonData = JSON.parse(data);
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


app.get('/favicon.ico', (req,res)=>{
  fs.readFile(__dirname+'/../images/x-icon.ico',function(err,data){
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'image/jpg'});
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

app.get('/ABOUT.html', (req, res) => {
  fs.readFile(__dirname+'/../ABOUT.html', function (err, data) {
    if(err) console.log(err);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});
/*
const writeFortunes = json => {
  fs.writeFile('../data/fortunes.json', JSON.stringify(json), err => console.log(err));
};

app.post('/SIGN#', (req, res) => {

  const { username , password, email } = req.body;

  const fortune_ids = fortunes.map(f => f.id);

  const new_fortunes = fortunes.concat({
    id: (fortune_ids.length > 0 ? Math.max(...fortune_ids) : 0) + 1,
    username,
    password,
    email
  });

  writeFortunes(new_fortunes);
  res.json(new_fortunes);
});
*/
module.exports = app;