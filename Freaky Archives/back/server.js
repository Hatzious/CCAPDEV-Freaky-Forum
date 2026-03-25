require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/connect');
const cors = require('cors')
const session = require('express-session');
const { MongoStore } = require('connect-mongo');
const app = express();
const authRoute = require('./routes/authroute');
const postRoute = require('./routes/postroute');
const commentRoute = require('./routes/commentroute');
const talker = [
    "http://localhost:5173",          
    process.env.FRONTEND_URL           
].filter(Boolean);

app.set('trust proxy', 1); 

connectDB();

app.use(cors({
    origin: talker, 
    credentials: true
}));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI
     }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true, 
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', 
        secure: process.env.NODE_ENV === "production" 
    }
}));

app.use('/api/Auth', authRoute);

app.use('/api/Poster', postRoute);

app.use('/api/Commenter', commentRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));