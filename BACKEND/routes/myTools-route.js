const express = require("express");

// separate file for logic for organization
const myToolsController = require("../controllers/myTools-controller");

// creating router
const router = express.Router();

router.get("/", myToolsController.getMyTools); // grabbing all checkedout tools by user
router.post("/add", myToolsController.addTool); // adding a tool to the 'mytools'
router.delete("/remove", myToolsController.removeTool); // removing a tool from the 'mytools' to check it back in

// export router to use in middleware
module.exports = router;
