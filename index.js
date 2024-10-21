const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory database
const upiDatabase = {
    "someone@upi": "John_Doe",
    "test@upi": "Jane Doe",
    "example@upi": "Alice Johnson"
};

app.get('/', (req, res) => {
    res.send("Hello World");
});

// Endpoint to get name by UPI ID
app.get('/get-name/:upiId', (req, res) => {
    const upiId = req.params.upiId;
    const name = upiDatabase[upiId];

    if (name) {
        return res.json({ name });
    } else {
        return res.status(404).json({ error: "UPI ID not found" });
    }
});

// Endpoint to add a new UPI ID and name
app.post('/add-entry', (req, res) => {
    const { upiId, name } = req.body;

    if (!upiId || !name) {
        return res.status(400).json({ error: "UPI ID and Name are required" });
    }

    // Add the new UPI ID and name to the database
    upiDatabase[upiId] = name;
    return res.status(201).json({ message: `Entry added: ${upiId} -> ${name}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
