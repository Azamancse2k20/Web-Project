console.log('May Node be with you');

const express = require('express')
const bodyParser= require('body-parser')
const app = express()
app.use('/scripts', express.static(__dirname + '/scripts/'))
const MongoClient = require('mongodb').MongoClient

app.listen(3001, function() {
    console.log('listening on 3001')
})

// app.get('/test', (req, res) => {
//     res.send('Hello World')
// })
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

// MongoClient.connect('mongodb+srv://Ahaduzzaman:Ahad6921@cluster0.k95kq.mongodb.net/Ahad?retryWrites=true&w=majority', { useUnifiedTopology: true })
// .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('Ahad')
//     const quotesCollection = db.collection('nodes')
// })
// .catch(error => console.error(error))


app.post('/quotes', (req, res) => {
    console.log(req.body);
    var url = 'mongodb+srv://Ahaduzzaman:Ahad6921@cluster0.k95kq.mongodb.net/Ahad?retryWrites=true&w=majority';
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = { name: req.body.test, time: Date.now() };
        dbo.collection("quotes").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
        });
    });

    return res.send({
        'status':true
    })
})


app.get("/getdata", async function (req, res) {
    var url = 'mongodb+srv://Ahaduzzaman:Ahad6921@cluster0.k95kq.mongodb.net/Ahad?retryWrites=true&w=majority';
    
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("quotes").find({}).toArray(function(err, result) {
        if (err) throw err;
        // console.log(result.name);
        db.close();
        return res.send({
            'status':true,
            'result':result
        })
    });
    });
    
});

//quary displaye input froms table and display data

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3000/quotes";

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
var query = { address: /^S/ };
dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
});
});


