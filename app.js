var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose    = require("mongoose"),
    MInDay  = require("./models/minday"),
    seedDB      = require("./seedDB/seeds"),
    app = express();

// mongoose.connect("mongodb://localhost/wnd");
mongoose.connect(process.env.DATABASEURL);

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// seedDB();

app.get("/", function(req, res){
    res.render("index");
});

app.post("/", function(req, res){
    var date = req.body.datepicker.match(/\S+/g) || [];
    if (date.length == 0){
        return res.redirect("back");
    }
    var month = date[0].toLowerCase();
    var day = date[1];
    MInDay.findOne({ 'month': month, 'day': day }).exec(function(err, foundMInDay){
        if(err || !foundMInDay){
            console.log(err);
            res.redirect("back");
        } else {
            res.redirect("/show/" + month + "/" + day);
        }
    });
});

app.get("/show/:month/:day", function(req, res){
    MInDay.findOne({ 'month': req.params.month, 'day': req.params.day }).exec(function(err, foundMInDay){
        if(err || !foundMInDay){
            console.log(err);
            res.redirect("back");
        } else {
            res.render("show", {MInDay: foundMInDay});
        }
    });
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/developers", function(req, res){
    res.render("developers");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("\n############## MInD SERVER HAS STARTED ##############\n");
});