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

exports.editPic = async (req, res) => {
    try {
        if (!req.session.user) return res.status(401).send({ message: "Unauthorized" });

        const { avatarUrl } = req.body;
    
        const updatedUser = await User.findByIdAndUpdate(
            req.session.user._id, 
            { "profile.avatarUrl": avatarUrl, "status.lastActive": new Date(), "status.isOnline": true },
            { new: true }
        );

        req.session.user = updatedUser;

        res.status(200).json({ message: "Avatar updated", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};