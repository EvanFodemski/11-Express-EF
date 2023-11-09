const express = require("express");
const apiRoutes = require('./Routes/apiroutes');
const htmlRoutes = require('./Routes/htmlroutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function(){
    console.log("App Listening on PORT " + PORT);
});
















