const mongoose = require("mongoose");


async function connectToMongo(url){
    mongoose.connect(url);
}

module.exports = {
    connectToMongo,
}