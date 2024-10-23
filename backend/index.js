const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();

const app = express();
const port = 5000;

// CORS Configuration with Explicit Options
const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, 
  optionsSuccessStatus: 204 
};

app.use(cors(corsOptions));

app.use(express.json());

app.options('*', cors(corsOptions)); 

app.use('/api/auth', require('./routes/auth'));

// Start the server
app.listen(port, () => {
  console.log(`swiggy-clone backend listening on port ${port}`);
});
