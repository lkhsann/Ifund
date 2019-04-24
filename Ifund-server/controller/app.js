var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var path = require('path');
var cors = require("cors")
var cor = cors();
app.use(cor);
app.use(express.static(path.join(__dirname, "../public")));
var project = require('../model/project.js');

app.get('/api/category/:catid/project', function (req, res) {
    var catid = req.params.catid;
    project.getprojectByCat(catid, function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            console.log(err);
            res.status(500).send(err);
        }
    });
});

app.get('/api/project', function (req, res) {
    project.getproject(function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            console.log(err);
            res.status(500).send(err);
        }
    })
})

module.exports = app