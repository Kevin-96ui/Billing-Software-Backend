const InvoiceData = require("../Model/InvoiceData.model.js");

// Create a new invoice data entry
exports.createInvoiceData = async (req, res) => {
    try {
        const { companyName, companyAddress, companyLogo } = req.body;
        const invoiceData = new InvoiceData({ companyName, companyAddress, companyLogo });
        await invoiceData.save();
        res.status(201).json({ message: "Invoice data created successfully", data: invoiceData });
    } catch (error) {
        res.status(500).json({ message: "Error creating invoice data", error: error.message });
    }
};

// Get all invoice data entries
exports.getAllInvoiceData = async (req, res) => {
    try {
        const invoiceData = await InvoiceData.find();
        res.status(200).json(invoiceData);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving invoice data", error: error.message });
    }
};

// Get a single invoice data entry by ID
exports.getInvoiceDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const invoiceData = await InvoiceData.findById(id);
        if (!invoiceData) {
            return res.status(404).json({ message: "Invoice data not found" });
        }
        res.status(200).json(invoiceData);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving invoice data", error: error.message });
    }
};

// Update an invoice data entry by ID
exports.updateInvoiceData = async (req, res) => {
    try {
        const { id } = req.params;
        const { companyName, companyAddress, companyLogo } = req.body;
        const invoiceData = await InvoiceData.findByIdAndUpdate(id, { companyName, companyAddress, companyLogo }, { new: true });
        if (!invoiceData) {
            return res.status(404).json({ message: "Invoice data not found" });
        }
        res.status(200).json({ message: "Invoice data updated successfully", data: invoiceData });
    } catch (error) {
        res.status(500).json({ message: "Error updating invoice data", error: error.message });
    }
};

// Delete an invoice data entry by ID
exports.deleteInvoiceData = async (req, res) => {
    try {
        const { id } = req.params;
        const invoiceData = await InvoiceData.findByIdAndDelete(id);
        if (!invoiceData) {
            return res.status(404).json({ message: "Invoice data not found" });
        }
        res.status(200).json({ message: "Invoice data deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting invoice data", error: error.message });
    }
};
