const db = require("../models");

module.exports = (app) => {
    app.get("/api", (req,res) =>{
        res.json({success:true})
    });

    app.post("/api/workout/new",(req,res)=>{
        db.Workout.create(req.body).then(response=>{
            res.json(response)
        })
    })
}