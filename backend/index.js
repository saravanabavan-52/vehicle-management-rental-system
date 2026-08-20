const express = require('express');
const app = express();

const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path=require('path')

const connectDatabase = require('./config/connectDb');
dotenv.config({ path:'./config/config.env' });



app.use(express.static(path.join(__dirname,'uploads')));
// Connect to database
connectDatabase();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5175"
    ],
    credentials: true
  })
);

app.use(express.json());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/rentals', require('./routes/rentalRoutes'));
app.use('/api/v1/vehicles', require('./routes/vehicleRoutes'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




// Error handling middleware
app.get('/', (req, res) => {
  res.send('API Working fine!')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});