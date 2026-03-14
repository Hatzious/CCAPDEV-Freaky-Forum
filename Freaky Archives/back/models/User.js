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

// Middleware
UserSchema.pre('save', function(next) {
    if (this.isNew) {
        this.status.lastActive = new Date();
    }
    next();
});

UserSchema.pre('findOneAndUpdate', function(next) {
    this.set({ 'status.lastActive': new Date() });
    next();
});

// Functions
UserSchema.methods.updateLastActive = function() {
    this.status.lastActive = new Date();
    return this.save();
}

UserSchema.methods.setOnline = function() {
    this.status.isOnline = true;
    this.status.lastActive = new Date();
    return this.save();
};

UserSchema.methods.setOffline = function() {
    this.status.isOnline = false;
    this.status.lastActive = new Date();
    return this.save();
}

module.exports = mongoose.model("User", UserSchema);