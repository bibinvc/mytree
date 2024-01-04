const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your MongoDB models (e.g., User, Product)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
