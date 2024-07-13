const express = require('express');
const cors = require('cors');
const client = require('./config/db.config');
const { createUserTable, createRoleTable, createUserRoleTable, createPageTable, createPageRoleTable } = require('./db/queries');
const getUserData = require('./db/getData');
require('dotenv').config();

const port = process.env.APP_PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is runnig");
});


// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userData = await getUserData(email, password);
        res.json(userData);
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    client.connect()
        .then(() => {
            console.log('Connected to PostgreSQL database');
            createRoleTable();
            createUserTable();
            createPageTable();
            createUserRoleTable();
            createPageRoleTable();
        })
        .catch(err => console.error('Connection error', err.stack));
});