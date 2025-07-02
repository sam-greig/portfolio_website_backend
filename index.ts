const express = require('express');
// const app = express();
// const PORT = 4000;
// api/home.js
module.exports = (req, res) => {
    const userId = process.env.EMAILJS_USER_ID;
    res.status(200).json(`Welcome, your app is working well. This is a test: ${userId}`);
};


// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// module.exports = app;