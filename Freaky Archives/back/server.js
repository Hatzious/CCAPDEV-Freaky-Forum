const express = require('express');
const connectDB = require('./config/connect');
const cors = require('cors')
const User = require('./models/User');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.post('/api/Register', async (req, res) => {
    try {
        const { username, email, password, dob} = req.body;
        const newUser = await User.create({username, email, password, dob});
        res.status(201).json({
            message: "User registered successfully!",
            user: newUser
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}); 

app.put('/api/Dread', async (req, res) => {
    try {
        const { userId, avatarUrl } = req.body;
    
        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            { "profile.avatarUrl": avatarUrl },
            { new: true }
        );

        res.status(200).json({ message: "Avatar updated", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));