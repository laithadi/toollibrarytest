const mongoose = require('mongoose');

// blueprint for the tools collection in database where all the tools will be stored
const Schema = mongoose.Schema;

const toolsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    availability: { type: String, required: true },
    // image not required because i cant seem to get images to work properly 
    image: { type: String }
}
);

// export so we can create new tool documentation in the database and other stuff 
module.exports = mongoose.model('Tool', toolsSchema);