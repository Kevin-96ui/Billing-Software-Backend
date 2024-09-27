const MasterProduct = require("../Model/masterproduct.model.js");

// Get all master products
const getallmasterproduct = async (req, res) => {
    try {
        const masterproducts = await MasterProduct.find({});
        res.status(200).json(masterproducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single master product
const getmasterproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const masterproduct = await MasterProduct.findById(id);
        if (!masterproduct) {
            return res.status(404).json("Master Product doesn't exist");
        }
        res.status(200).json(masterproduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create master product with auto-generated ProductID
const createmasterproduct = async (req, res) => {
    try {
        // Find the last inserted product and auto-increment the ProductID
        const lastProduct = await MasterProduct.findOne().sort({ ProductID: -1 });
        const newProductID = lastProduct && lastProduct.ProductID ? lastProduct.ProductID + 1 : 1;

        // Create a new master product with the auto-generated ProductID
        const newMasterProduct = new MasterProduct({
            ProductID: newProductID,
            HSN_SAC: req.body.HSN_SAC,
            Product_Detials: req.body.Product_Detials,
            Unit_Price: req.body.Unit_Price,
            discount: req.body.discount,
            taxmaster: req.body.taxmaster,
            code: req.body.code,
        });

        // Save the new product to the database
        const savedProduct = await newMasterProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error("Error creating master product:", error.message);
        res.status(500).json({ message: "Internal Server Error", details: error.message });
    }
};

// Update master product
const updatemasterproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await MasterProduct.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json("Master Product doesn't exist");
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete master product
const deletemasterproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await MasterProduct.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json("Master Product doesn't exist");
        }
        res.status(200).json({ message: "Master Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getallmasterproduct,
    getmasterproduct,
    createmasterproduct,
    updatemasterproduct,
    deletemasterproduct,
};
