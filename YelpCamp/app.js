var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static('./public'));

var campgrounds = [
    {"name":"Salmon Creek", "image": "images/1149402.png"},
    {"name":"Granite Hill", "image":"images/1846142.png"},
    {"name":"Mountain Goat's Rest", "image":"images/1867275.png"}
];

campgrounds.create(
    {
        name: "Granite Hill",
        image:"images/1846142.png",
        description:"This is a huge granite hill"
    }, function(err, campground){
        if(err){
            console.log(err);
        }  else {
            console.log("NEWLY CREATED CAMPGROUND");
            console.log(campground);
        }
    }
);

app.get("/", function(req,res){
    res.send("landing");
});

app.get('/campgrounds', function(req,res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }   else{
            res.render("campground",{"campgrounds":allCampgrounds});
        }
    });
});

app.post('/campgrounds', function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image}
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }   else{

        }
    });

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("The YelpCamp server has started!");
});