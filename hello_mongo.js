//mongodb+srv://abhinav_22002:<password>@cluster0.y0xrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const MongoClient = require('mongodb').MongoClient;
const Db = 'mongodb+srv://abhinav_22002:abhi1232002@cluster0.y0xrk.mongodb.net/E-commerce_Site?retryWrites=true&w=majority'


const add = (id,image,name,category,price)=>{
    MongoClient.connect(Db,function(err,db){
        if(err) throw err;
        let dbo= db.db("E-commerce_Site");
        let myobj = {"id":id,"image":image,"name":name,"category":category,"price":price};
        dbo.collection("items").insertOne(myobj,function(err,res){
            if(err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
};


 const findAll = ()=>{
    MongoClient.connect(Db, function(err, db) {
        if (err) throw err;
        var dbo = db.db("E-commerce_Site");
        dbo.collection("items").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
};

const findItems = (id)=>{
    MongoClient.connect(Db, function(err, db) {
        if (err) throw err;
        var dbo = db.db("E-commerce_Site");
        dbo.collection("items").findOne({"id":`${id}`}, function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
};

const deleteItem = (id)=>{
    MongoClient.connect(Db, function(err, db) {
        if (err) throw err;
        var dbo = db.db("E-commerce_Site");
        var myquery = { "id": `${id}` };
        dbo.collection("items").deleteOne(myquery, function(err, obj) {
          if (err) throw err;
          console.log("1 document deleted");
          db.close();
        });
      });
};

const updateItem = (id,image,name,category,price,idtch)=>{
    MongoClient.connect(Db, function(err, db) {
        if (err) throw err;
        let dbo = db.db("E-commerce_Site");
        let myquery = { id:`${idtch}` };
        let newvalues = { $set: {id: `${id}`, image:`${image}`, name:`${name}`, category:`${category}`, price:`${price}` } };
        dbo.collection("items").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          db.close();
        });
      });
};

