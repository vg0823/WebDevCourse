var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static('./public'));

var campgrounds = [
    {"name":"Salmon Creek", "image": "images/1149402.png"},
    {"name":"Granite Hill", "image":"images/1846142.png"},
    {"name":"Mountain Goat's Rest", "image":"images/1867275.png"}
];

app.get("/", function(req,res){
    res.send("landing");
});

app.get('/campgrounds', function(req,res){
    res.render("campground",{"campgrounds":campgrounds});
});

app.post('/campgrounds', function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image}
    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("The YelpCamp server has started!");
});