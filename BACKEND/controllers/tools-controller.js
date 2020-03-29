// this is where the logic part of each method will go for tools routes
const mongoose = require("mongoose");

// importing the model Tool to also access DB
const Tool = require("../models/tools");

// returns a list of all the tools in the data base to use for get method
const listOfTools = async (req, res, next) => {
  let tools;
  try {
    tools = await Tool.find();
  } catch (err) {
    return next(
      new Error("Sorry could not get the list of tools for display.")
    );
  }
  // check to see if tools is empty
  if (!tools) {
    return next(new Error("No tools stored in database."));
  }
  // return list of tools
  res.json({ tools: tools.map(tool => tool.toObject({ getters: true })) });
};

// grabbing the tool by the name in the url (used when clicking on a tool to view more information from front end server)
const getToolByName = async (req, res, next) => {
  // get the name of the tool
  const toolName = req.params.toolname;
  let tool;
  // use a try catch just in case something goes wrong in trying to get the tool
  try {
    tool = await Tool.find({ name: toolName });
  } catch (err) {
    return next(new Error("sorry buddy again"));
  }
  // return tool
  res.json({tool: tool} );
};

// export logic
exports.listOfTools = listOfTools;
exports.getToolByName = getToolByName;
