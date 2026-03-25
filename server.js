const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// API route
app.post('/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operator";
    }

    res.json({ result });
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
