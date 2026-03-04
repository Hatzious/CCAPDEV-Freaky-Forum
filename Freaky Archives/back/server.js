const express = require('express');
const connectDB = require('./config/connect');
const cors = require('cors')

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));