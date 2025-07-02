const express = require('express');
const app = express();
app.get('/', (req, res) => {
    const userId = process.env.EMAILJS_USER_ID;
    res.status(200).json(`Welcome, your app is working well. This is a test: ${userId}`);
});

module.exports = app;