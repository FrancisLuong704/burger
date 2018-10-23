//import connection
var connection = require("./config/connection");
//dependencies
var express = require("express");
var exphbs = require("express-handlebars");
//use express and parse request body as json
var app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//using handlebars to render the main index.handlebars page with the burgers in it
app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) throw err;
        res.render("index", {burgers: data});
    });
});
//insert info into burger table in database
//creating a burger
app.post("/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES(?)", [req.body.burger], function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        //send back ID of the new Burger
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});
//starts it all up what whattttttttt
//by that i mean the server so we can listen to client requests
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
