const mongoose = require("mongoose");

const UserSchema =  new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    stats: {
        followingCount: { type: Number, default: 0 },
        followerCount: { type: Number, default: 0 }
    },
    status: {
        lastActive: { type: Date, default: Date.now },
        isOnline: { type: Boolean, default: false }
    },
    profile: {
        bio: { type: String, default: "Wow, such empty", trim: true },
        avatarUrl: { type: String, default: "./puppy.jpg" }
    }
}, { timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }});

module.exports = mongoose.model("User", UserSchema);