const router = require('express').Router();
const fs = require("fs").promises;

router.get("/notes", async function(req, res){
    try {
        const data = await fs.readFile('./db/db.json', 'utf-8');
        const notes = JSON.parse(data);
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




router.post("/notes", async function(req, res){
    try{
        let newNote = req.body;
        const data = await fs.readFile('./db/db.json', 'utf-8');
        const notes = JSON.parse(data);
        console.log(notes);
        let specialId = data.length.toString();

        console.log(specialId);
        newNote.id = specialId;
        notes.push(newNote);
        await fs.writeFile("./db/db.json", JSON.stringify(notes));
        res.json(newNote)

    } catch(error){
        console.log(error);
        res.status(500).json({error: "Server Error"})
    }
});

//I did not complete this
// router.delete("/notes/:id", async function(req,res){
//     console.log(req.params.id);
//     const data = await fs.readFile('./db/db.json', 'utf-8');
//     const notes = JSON.parse(data);
//     let noteId = req.params.id;
//     let newId = 0;
    
// })

module.exports = router;