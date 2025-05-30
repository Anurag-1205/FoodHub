const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    retaurantName : String,
    email : String,
    password: String,
    menu: [{
        photo: String,
        price: Number,
        rating: Number,
        category: String,
        description: String
    }]
})

module.exports = mongoose.model("restaurant", adminSchema);