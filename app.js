var express = require("express");
var app = express();
var port = 3000;

app.post("/receivemsg", (req, res) => {
    var myData = new Message(req.body);
    console.log( req.body)
    myData.save()
        .then(item => {
            res.send("Message saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});