const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Task = require("../models/taskModel");
const taskController = require("../controllers/taskController");

router.post("/", auth, taskController.createTask);
router.get("/", auth, taskController.getAllTasks);
router.get("/:id", auth, taskController.getTaskById);
router.put("/:id", auth, taskController.updateTask);
router.delete("/:id", auth, taskController.deleteTask);

module.exports = router;
