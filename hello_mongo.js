//mongodb+srv://abhinav_22002:<password>@cluster0.y0xrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const MongoClient = require('mongodb').MongoClient;
const db = 'mongodb+srv://abhinav_22002:abhi1232002@cluster0.y0xrk.mongodb.net/E-commerce_Site?retryWrites=true&w=majority'
let url = "mongodb://localhost:27017/mydb"

MongoClient.connect(db,function(err,db){
    if(err) throw err;
    let dbo= db.db("E-commerce_Site");
    let myobj = {"id":41,"image":"img41.jfif","name":"Watch 41","category":"watch","price":25};
    dbo.collection("items").insertOne(myobj,function(err,res){
        if(err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});
