const mongoose = require("mongoose");

// Replace this with your actual MongoDB Atlas connection string
const mongoUri = "mongodb+srv://AaronSaldanha:cP7rHzKAuAsJc%2A5@swiggy-clone-backend.cnfwg.mongodb.net/swiggy-clone?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((e) => console.log("MongoDB connection error:", e.message));
};

module.exports = connectToMongo;
