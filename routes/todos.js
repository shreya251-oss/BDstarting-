const express = require("express");
const router = express.Router();

const{createtodo} = require("../controllers/createtodo");

router.post("/createtodo", createtodo);

const{getTodo, getTodobyid} = require("../controllers/getTodo");
router.get("getTodos", getTodo);
router.get("/getTodos/:id", getTodobyid);

const {updateTodo} = require("../controllers/updateTodo");
router.put("/updateTodo/:id", updateTodo); 

const {deleteTodo} = require("../controllers/deleteTodo");
router.delete("/deleteTodo/:id", deleteTodo); 
module.exports = router;