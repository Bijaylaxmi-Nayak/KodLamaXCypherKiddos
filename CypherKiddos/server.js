const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5602;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory user data
let users = [
    { username: 'admin', password: 'password123', email: 'admin@example.com' },
    { username: 'user1', password: 'password456', email: 'user1@example.com' }
];

// Login Endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        return res.status(200).json({ message: 'Login successful', user });
    } else {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
});

// Registration Endpoint
app.post('/register', (req, res) => {
    const { fullName, username, email, password, contactNumber, address, farmName, farmSize, fishType, productionCapacity, experience, investmentNeeded, investmentAmount, investorInterest } = req.body;

    const existingUser = users.find(u => u.username === username || u.email === email);

    if (existingUser) {
        return res.status(400).json({ error: 'Username or email already exists' });
    }

    const newUser = {
        fullName,
        username,
        email,
        password,
        contactNumber,
        address,
        farmName: farmName || "",
        farmSize: farmSize || "",
        fishType: fishType || "",
        productionCapacity: productionCapacity || "",
        experience: experience || "",
        investmentNeeded: investmentNeeded || "",
        investmentAmount: investmentAmount || "",
        investorInterest: investorInterest || ""
    };

    users.push(newUser);
    return res.status(201).json({ message: 'Registration successful', newUser });
});

// Server Initialization
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
