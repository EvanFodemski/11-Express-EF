const fs = require("fs");
let data = JSON.parse(fs.readFileSync('./Devlop/db/db.json'))
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app){
app.get("/api/notes", function(req, res){

    res.JSON(data);

});
app.get("/api/notes:id", function(req, res){
    res.json(data[Number(req.params.id)]);

});
app.post("/api/notes", async function(req, res){
    try{
        let newNote = req.body;

        let specialId = data.length.toString();

        console.log(specialId);
        newNote.id = specialId;
        data.push(newNote);
        await writeFileAsync("./db/db.json", JSON.stringify(data));
        res.json(data)

    } catch(error){
        console.log(error);
        res.status(500).json({error: "Server Error"})
    }
});


}