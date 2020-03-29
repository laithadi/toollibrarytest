// this is where the logic part of each method will go for mytools routes
const mongoose = require("mongoose");

// imorting schema
const MyTools = require("../models/myTools");

// getting users list of tools that are checkout
const getMyTools = async (req, res, next) => {
  let myTools;
  // try catch just in case something goes wrong
  try {
    myTools = await MyTools.find();
  } catch (err) {
    return next(
      new Error(
        "Something went wrong in retrieving the list of checkedout tools."
      )
    );
  }
  res.json({
    myTools: myTools.map(myTool => myTool.toObject({ getters: true }))
  });
};

// adding a new mytool document into database when checking out a tool
const addTool = async (req, res, next) => {
  // grabbing the info from body
  const { name, description, price, image, availability } = req.body;
  // checking if th euser checked out 3 tools or not
  const numOfTools = await MyTools.countDocuments();
  if (numOfTools === 3) {
    return next(new Error("You have already checkedout 3 tools."));
  }
  // create tool document
  const addedTool = new MyTools({
    name,
    description,
    price,
    availability,
    image
  });
  // check if its already checked out
  const tempTool = await MyTools.findOne({ name, description, price, image, availability })
  if (tempTool) {
    return next(new Error("Item already checked out."));
  }
  // if item never checkout out then we can add to collection in the database
  try {
    addedTool.save();
  } catch (err) {
    return next(new Error("Something went wrong checking the tool out."));
  }
  res.json({addedTool});
};

// checking back a tool in we have to remove it from mytools collection DB
const removeTool = async (req, res, next) => {
  const { name, description, price, image } = req.body;
  let removedTool;
  // finding the tool that needs to be removed
  try {
    removedTool = await MyTools.findOne({ name, description, price, image });
  } catch (err) {
    return next(new Error("Could not retrieve tool."));
  }
  // removing the tool and returning it
  removedTool.remove();
  res.json(removedTool);
};

exports.getMyTools = getMyTools;
exports.addTool = addTool;
exports.removeTool = removeTool;
