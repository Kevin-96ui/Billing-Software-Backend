const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
    deleteAllProducts,
} = require("../Controller/product.controller.js"); 

// Get all products
router.get('/', getProducts);

// Get a single product by ID
router.get('/:id', getProduct);

// Create a new product
router.post('/', createProduct);

// Update a product by ID
router.put('/:id', updateProduct);

// Delete a product by ID
router.delete('/:id', deleteProduct);

router.delete('/', deleteAllProducts);


module.exports = router;
