const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();


// Route import 
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');



app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Routes
app.use('/api/v1', authRoutes); ///register
app.use('/api/v1', propertyRoutes); //(http://localhost:5000/api/v1/list)

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}`);
});
