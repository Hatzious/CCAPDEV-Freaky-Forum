const express = require('express');
const connectDB = require('./config/connect');
const cors = require('cors')
const User = require('./models/User');
const session = require('express-session');
const { MongoStore } = require('connect-mongo');
const app = express();

connectDB();

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}));
app.use(express.json());

app.use(session({
    secret: "greateststrongestbbc",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/freaky"
     }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true, 
        sameSite: 'lax' 
    }
}));

app.post('/api/Register', async (req, res) => {
    try {
        const { username, email, password, dob} = req.body;
        const newUser = await User.create({username, email, password, dob});

        req.session.user = newUser;

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
        if (!req.session.user) return res.status(401).send({ message: "Unauthorized" });

        const { avatarUrl } = req.body;
    
        const updatedUser = await User.findByIdAndUpdate(
            req.session.user._id, 
            { "profile.avatarUrl": avatarUrl },
            { new: true }
        );

        req.session.user = updatedUser;

        res.status(200).json({ message: "Avatar updated", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/me', (req, res) => {
    if (req.session.user) {
        return res.json({ loggedIn: true, user: req.session.user });
    }
    res.json({ loggedIn: false });
});

app.post('/api/Logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.json({ message: "Logged out" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));