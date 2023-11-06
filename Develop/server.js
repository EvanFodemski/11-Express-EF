const express = require("express");
const fs = require("fs");
const { clog } = require('./middleware/clog');


var app = express();
var PORT = 3001;
const port = process.env.PORT || 3001

require("./Routes/apiroutes")(app);
require("./Routes/htmlroutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public/assets". express.static(__dirname + "/public/assets"));

app.listen(PORT, function(){
    console.log("App Listening on PORT" + PORT);
})