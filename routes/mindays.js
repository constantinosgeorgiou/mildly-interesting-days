var express = require("express"),
	router  = express.Router(),
	MInDay  = require("../models/minday");
	
/* INDEX */
router.get("/", function(req, res){
	var getToday = new Date();
	var day = getToday.getDate();
	var months = new Array();
		months[0]  = "January";
		months[1]  = "February";
		months[2]  = "March";
		months[3]  = "April";
		months[4]  = "May";
		months[5]  = "June";
		months[6]  = "July";
		months[7]  = "August";
		months[8]  = "September";
		months[9]  = "October";
		months[10] = "November";
		months[11] = "December";
	var month = months[getToday.getMonth()]; //January is 0!
	var date = day + " " + month;
	res.render("index", {today: date});
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