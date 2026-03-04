const User = require("../models/User");
const jwt = require('jsonwebtoken');

// Register the user
exports.register = async(req, res) => {
    try {
        const { username, email, password, dob } = req.body;

        // Check if user exists
        let user = await User.findOne({ $or: [{email}, {username}] });

        if (user) {
            return res.status(400).json({ msg:"User already exists!" });
        }

        // Create new user
        user = new User({
            username,
            email,
            password,
            dob
        });

        await user.save();

        // Create token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign (
            payload,
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '13d' },
            (err, token) => {
                if (err) throw err;
                res.json ({
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                    }
                });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
};

// Login the user
exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        let user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ msg:"Invalid: User not found!" });
        }

        // Check password
        let isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ msg:"Invalid password!" });
        }

        // Update last active
        user.status.lastActive = Date.now();
        user.status.isOnline = true;
        await user.save();

        // Create token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign (
            payload,
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '13d' },
            (err, token) => {
                if (err) throw err;
                res.json ({
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                    }
                });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
}