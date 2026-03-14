const express = require('express');
const connectDB = require('./config/connect');
const cors = require('cors')
const session = require('express-session');
const { MongoStore } = require('connect-mongo');
const User = require('./models/User');
const Post = require('./models/Post');
const app = express();
const authRoute = require('./routes/authroute');
const editRoute = require('./routes/editroute');
const postRoute = require('./routes/postroute');

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

app.use('/api/Auth', authRoute);

app.use('/api/Edit', editRoute);

app.use('/api/Poster', postRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));