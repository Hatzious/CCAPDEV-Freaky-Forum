const User = require('../models/User');
const crypto = require('bcrypt');
const salty = 10;

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ 
            username: username.trim(), 
        });

        if (!user) {
            return res.status(401).json({ message: "User does not exist" });
        }

        const saltyHashBrowns = await crypto.compare(password, user.password);
        if (!saltyHashBrowns) {
            return res.status(401).json({ message: "Wrong password" });
        }
        
        await user.setOnline();
        req.session.user = user.toObject({ virtuals: true });
            
        console.log(`${user.username} logged in!`);
        res.status(200).json({ message: "Logged in", user: req.session.user });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.logoutUser = async (req, res) => {
    try {
        if (req.session.user) {
            const user = await User.findById(req.session.user._id);
            if (user) {
                await user.setOffline();
            }
        }

        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: "Could not log out completely" });
            }
            
            res.clearCookie('connect.sid');
            res.json({ message: "Logged out" });
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

 exports.meUser = (req, res) => {
    if (req.session.user) {
        return res.json({ loggedIn: true, user: req.session.user });
    }
    res.json({ loggedIn: false });
};

exports.registerUser = async (req, res) => {
    try {
        const { username, email, password, dob} = req.body;
        const hashBrowns = await crypto.hash(password, salty);
        const newUser = await User.create({username, email, password: hashBrowns, dob});

        await newUser.setOnline();

        req.session.user = newUser.toObject({ virtuals: true });

        res.status(201).json({
            message: "User registered successfully!",
            user: req.session.user
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.updateProfile = async (req, res) => {
    try {
        if (!req.session.user) return res.status(401).send({ message: "Unauthorized" });
        let update = {};

        const { username, dob, bio, avatarUrl, password } = req.body;

        if (username) update.username = username.trim();
        if (dob) update.dob = dob;
        if (bio) update["profile.bio"] = bio;
        if (avatarUrl) update["profile.avatarUrl"] = avatarUrl
        if (password && password.trim() !== "") {
            update.password = await crypto.hash(password, salty);
        }

        if (username && username !== req.session.user.username) {
            const existingUser = await User.findOne({ username: username.trim() });
            if (existingUser) {
                return res.status(400).json({ message: "This investigator name is already active." });
            }
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.session.user._id, 
            { $set: update, "status.lastActive": new Date(), "status.isOnline": true },
            { new: true }
        );

        req.session.user = updatedUser.toObject({ virtuals: true });

        res.status(200).json({ message: "Avatar updated", user: req.session.user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};