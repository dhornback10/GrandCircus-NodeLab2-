var express = require("express");
var inMemoryDatabase = require("./in-memory-database.js");
var router = express.Router();

var taskDb = inMemoryDatabase();
taskDb.init([
	{task: "I am an example task!"}
	]);

router.get("/tasks", function(req, res){
	res.send(taskDb.readAll());
});

router.post("/tasks", function(req,res){
	var task = req.body;
	taskDb.create(task);
	res.status(201).send(task);
});

router.delete("/tasks/:id", function(req,res){
	var id = req.params.id;
	taskDb.delete(id);
	res.send("Deleted.");
});

router.put("/tasks/:id", function(req,res){
	var id = req.params.id;
	var task = req.body.task;
	taskDb.update(id, task);
	res.status(201).send("Updated");
})

module.exports = router;