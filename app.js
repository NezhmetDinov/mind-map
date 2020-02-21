//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

//************* Main Code **************

var sourceNames = [];
var wordNames = [];

app.get("/", function(req, res){
  res.render("home");
});

app.get("/mindmap", function(req, res){
  res.render("mindmap", {
    numberOfSources: numberOfSources,
    numberOfWords: numberOfWords,
    sourceNames: sourceNames,
    wordNames: wordNames
  });
});

app.post("/mindmap", function(req, res){

  numberOfSources = req.body.source;
  numberOfWords = req.body.word;
  sourceNames = req.body.sourcesTitle;
  wordNames = req.body.wordsTitle;
  console.log(sourceNames);
  res.redirect("/mindmap");

});

app.listen(3000, function(req, res){
  console.log("Server started at port 3000");
});
