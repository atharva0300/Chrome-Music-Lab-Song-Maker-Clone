const express = require('express');
const axios = require('axios');

const app = express();
app.use(express());

const PORT = process.env.PORT || 5000;
console.log('Server running');


app.listen(PORT , () => {
    console.log('Server running on port : ' , PORT);
})