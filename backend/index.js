const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Allow requests from the frontend dev server
app.use(cors());

app.use(express.json());

// In-memory product list for demonstration purposes
const products = [
  { id: 1, name: 'Figura de dragón', category: '3D', price: 15 },
  { id: 2, name: 'Llaveros personalizados', category: '3D', price: 8 },
  { id: 3, name: 'Kit básico Diamond Painting', category: 'Diamond', price: 25 },
  { id: 4, name: 'Lienzo Mandala Diamond', category: 'Diamond', price: 30 },
  { id: 5, name: 'Caja de almacenamiento para materiales', category: 'Accesorios', price: 12 }
];

app.get('/api', (req, res) => {
  res.json({ message: 'API running' });
});

app.get('/api/products', (req, res) => {
  let result = products;
  const { category, search } = req.query;

  if (category) {
    result = result.filter(
      (p) => p.category.toLowerCase() === String(category).toLowerCase()
    );
  }

  if (search) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(String(search).toLowerCase())
    );
  }

  res.json(result);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
