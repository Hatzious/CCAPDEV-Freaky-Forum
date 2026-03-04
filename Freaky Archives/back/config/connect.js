const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', (err) => console.log("MongoDB Error: ", err));
db.on('disconnected', () => console.log("MongoDB Disconnected"));

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/freaky");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;