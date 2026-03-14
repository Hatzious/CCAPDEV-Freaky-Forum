const User = require('../models/User');

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