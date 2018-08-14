var express = require("express"),
	router  = express.Router(),
	MInDay  = require("../models/minday");
	
/* INDEX */
router.get("/", function(req, res){
	res.render("index");
});

router.post("/", function(req, res){
	var date = req.body.datepicker.match(/\S+/g) || [];
	// req.body.datepicker returns a string with whitespace
	// with the .match(/\S+/g) method we get rid of them
	// then we place what's left in an array
	if (date.length == 0){ // if the array is empty return back
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

/* SHOW - shows more info about a specific date */
router.get("/show/:month/:day", function(req, res){
	MInDay.findOne({ 'month': req.params.month, 'day': req.params.day }).exec(function(err, foundMInDay){
		if(err || !foundMInDay){
			console.log(err);
			res.redirect("back");
		} else {
			res.render("show", {MInDay: foundMInDay});
		}
	});
});

/* ABOUT */
router.get("/about", function(req, res){
	res.render("about");
});

/* This is where the API Docs will be */
router.get("/developers", function(req, res){
	res.render("developers");
});

module.exports = router;