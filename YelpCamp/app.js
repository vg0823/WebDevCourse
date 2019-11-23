var express = require('express');
var app = express();

app.set("view engine", "ejs")

app.get("/", function(req,res){
    res.send("landing");
});

app.get('/campgrounds', function(req,res){

});

app.listen(3000, function(){
    console.log("The YelpCamp server has started!");
});