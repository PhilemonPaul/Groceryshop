const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Grocery Billing App running at http://localhost:3000');
});