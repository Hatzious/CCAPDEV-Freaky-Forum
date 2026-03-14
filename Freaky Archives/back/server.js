const express = require('express');
const connectDB = require('./config/connect');
const cors = require('cors')
const session = require('express-session');
const { MongoStore } = require('connect-mongo');
const User = require('./models/User');
const Post = require('./models/Post');
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

        await newUser.setOnline();

        req.session.user = newUser;

        res.status(201).json({
            message: "User registered successfully!",
            user: newUser
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}); 

app.post('/api/Login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        
        if (user) {
            await user.setOnline();
            req.session.user = user.toObject({ virtuals: true });
            console.log("logged in!");
            res.json({ message: "Logged in", user: req.session.user });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/Dread', async (req, res) => {
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
});

app.get('/api/me', (req, res) => {
    if (req.session.user) {
        return res.json({ loggedIn: true, user: req.session.user });
    }
    res.json({ loggedIn: false });
});

app.post('/api/Logout', async (req, res) => {
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
        });

        res.clearCookie('connect.sid');
        res.json({ message: "Logged out" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/Posts', async (req, res) => {
    try {
        const { sorter, name, title, scorer, viewer, tags } = req.query;
        let quarry = {};
        let sorted = { createdAt: -1 };

        if (sorter && sorter === "old") {
            sorted = { createdAt: 1 };
        }

        if (name) {
            const authorUser = await User.findOne({ username: name });
            if (authorUser) {
                quarry.author = authorUser._id;
            } else {
                return res.json([]); 
            }
        }

        if (title) {
            quarry.title = { $regex: title, $options: 'i' };
        }

        if (scorer === "most") {
            sorted = { score: -1 };
        } else if (scorer === "least"){
            sorted = { score: 1 };
        }

        if (viewer === "most") {
            sorted = { views: -1 };
        } else if (viewer === "least") {
            sorted = { views: 1 };
        }

        if (tags) {
            let tagList;
            if (Array.isArray(tags)) {
                tagList = tags.map(t => t.toLowerCase());
            } else if (tags.includes(',')) {
                tagList = tags.split(',').map(t => t.toLowerCase());
            } else {
                tagList = [tags.toLowerCase()];
            }
            quarry.tags = { $all: tagList };
        }

        const posts = await Post.find(quarry)
        .populate("author", "username profile")
        .sort(sorted);
        res.json(posts);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));