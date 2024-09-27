// For Intra Inter operation
const Invoicetype = require("../Model/Invoicetype.model.js")

// All Invoicetypes
const getInvoicetypes=async (req,res)=>{
    try{
        const users=await Invoicetype.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    } 
};

// Single Invoicetype
const getInvoicetype=async (req,res)=>{
    try{
        const{id}=req.params;
        const users=await Invoicetype.findById(id);
        if(!users) {
            return res.status(404).json("User doesnt exist");
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    } 
    };

//CREATE Invoicetype
const createInvoicetype=async(req,res)=>{
    try{
        const users = await Invoicetype.create(req.body);
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

// Delete Invoicetype
const deleteInvoicetype=async(req,res)=>{
    try {
        const {id} =req.params;
        const users = await Invoicetype.findByIdAndDelete(id);
        if(!users) {
            return res.status(404).json("Invoicetype doesnt exist");
        }
        res.status(200).json("Invoicetype Deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Update Invoicetype
const updateInvoicetype = async(req,res)=>{
    try {
        const {id} = req.params;
        const users = await Invoicetype.findByIdAndUpdate(id, req.body);
        if(!users) {
            return res.status(404).json("Invoicetype doesnt exist");
        }
        res.status(200).json("Invoicetype Updated successfully !");   
    } catch (error) {
        res.status(500).json({
            message: error.message,
        }); 
    }
};

// Delete all Invoicetype
const deleteAllInvoicetypes = async (req, res) => {
    try {
        await Invoicetype.deleteMany({});
        res.status(200).json("All Invoicetype deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports={
    getInvoicetypes,
    getInvoicetype,
    createInvoicetype,
    deleteInvoicetype,
    updateInvoicetype,
    deleteAllInvoicetypes,
}