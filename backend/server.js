require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
  console.log('✅ MongoDB connected');
  // Routes
  app.use('/api/auth', require('./routes/auth'));

  app.listen(process.env.PORT || 5000, () => console.log('Server running on port', process.env.PORT || 5000));
})
.catch(err => console.log('MongoDB error:', err));
