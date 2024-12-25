const mongoose = require('mongoose');

// shcema to store urls 
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        require: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },

    // to store history of shorted url 
    visitHistory: [{ timestamp: { type: Number } }]

},
    { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;