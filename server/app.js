const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors')

const app = express();

app.use(cors())
const uri = "mongodb+srv://SDP1:Mi12te34@cluster0.cywxciw.mongodb.net/?retryWrites=true&w=majority";

// Middleware to parse JSON data in request body
app.use(bodyParser.json());

// Connect to your MongoDB database
mongoose.connect(uri, {
  
});

// Import and use the auth route
const signUpRoute = require('./routes/signup')
const loginRoute = require('./routes/login')
app.use('/api', signUpRoute);
app.use('/api',loginRoute)

// Start the Express server
const PORT =  8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
