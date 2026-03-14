const User = require('../models/User');

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ 
            username: username.trim(), 
            password: password 
        });

        if (user) {
            await user.setOnline();
            req.session.user = user.toObject({ virtuals: true });
            
            console.log(`${user.username} logged in!`);
            res.status(200).json({ message: "Logged in", user: req.session.user });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
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