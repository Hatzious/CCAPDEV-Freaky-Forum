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