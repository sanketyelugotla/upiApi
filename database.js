// database.js
const upiDatabase = {
    "someone@upi": "John_Doe",
    "test@upi": "Jane Doe",
    "example@upi": "Alice Johnson",
    "sanketyelugotla@ybl": "Sanket Yelugotla"
};

// Function to retrieve the name by UPI ID
function getNameByUpi(upiId) {
    return upiDatabase[upiId] || null;
}

// Export the database and function
module.exports = { upiDatabase, getNameByUpi };
