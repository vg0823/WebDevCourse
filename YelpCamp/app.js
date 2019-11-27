var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static('./public'));

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Mountain Goat's Rest",
//         image:"images/1867275.png",
//         description:"This is a mountain."
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         }  else {
//             console.log("NEWLY CREATED CAMPGROUND");
//             console.log(campground);
//         }
//     }
// );

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
    var description = req.body.description;
    var newCampground = {name:name, image:image, description:description};
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }   else{
            res.redirect("/campgrounds"); 
        }
    });

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.get("/campgrounds/:id", function(req,res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }  else{
            res.render("show",{campground: foundCampground});
        }
    });
});

app.listen(3000, function(){
    console.log("The YelpCamp server has started!");
});