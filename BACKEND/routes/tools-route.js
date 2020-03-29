const express = require("express");

// controllers in a separate file for organization
const toolsController = require("../controllers/tools-controller");

// creating my router
const router = express.Router();

// two get methods, one for all the tools and the second to grab the information of the sepecific tool
router.get("/", toolsController.listOfTools);
router.get("/tool/:toolname", toolsController.getToolByName);

// exporting the router
module.exports = router;
