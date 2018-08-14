var express    = require("express"),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    MInDay     = require("./models/minday"),
    seedDB     = require("./seedDB/seeds"),
    app        = express();

// Requiring Routes
var mindaysRoutes = require("./routes/mindays");

// mongoose.connect("mongodb://localhost/wnd");
mongoose.connect(process.env.DATABASEURL);

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// seedDB();

app.use("/", mindaysRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("\n############## MInD SERVER HAS STARTED ##############\n");
});