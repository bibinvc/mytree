const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your-database-url' with your MongoDB URL)
mongoose.connect('your-database-url', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple Product model
const Product = mongoose.model('Product', { name: String, price: Number });

// Define a route to get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
