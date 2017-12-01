var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
    

    // ROUTES
var indexRoutes = require("./routes/index");
    

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use("/", indexRoutes);

// RUN SERVER
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});