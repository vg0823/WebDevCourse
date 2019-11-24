var express = require('express');
var app = express();

app.set("view engine", "ejs")
app.use(express.static('./public'));
app.get("/", function(req,res){
    res.send("landing");
});

app.get('/campgrounds', function(req,res){
    var campgrounds = [
        {"name":"Salmon Creek", "image": "images/1149402.png"},
        {"name":"Granite Hill", "image":"images/1846142.png"},
        {"name":"Mountain Goat's Rest", "image":"images/1867275.png"}
    ];

    res.render("campground",{"campgrounds":campgrounds});
});

app.listen(3000, function(){
    console.log("The YelpCamp server has started!");
});