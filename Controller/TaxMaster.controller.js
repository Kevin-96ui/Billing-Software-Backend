// For TaxMaster operation
const TaxMaster = require("../Model/TaxMaster.model");

// All TaxMaster
const getTaxMasters = async (req,res)=>{
    try{
        const users=await TaxMaster.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    } 
};

// Single TaxMaster
const getTaxMaster = async (req,res)=>{
    try{
        const{id}=req.params;
        const users=await TaxMaster.findById(id);
        if(!users) {
            return res.status(404).json("TaxMaster doesnt exist");
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    } 
    };

//CREATE TaxMaster
const createTaxMaster=async(req,res)=>{
    try{
        const users = await TaxMaster.create(req.body);
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

// Delete TaxMaster
const deleteTaxMaster = async(req,res)=>{
    try {
        const {id} =req.params;
        const users = await TaxMaster.findByIdAndDelete(id);
        if(!users) {
            return res.status(404).json("TaxMaster doesnt exist");
        }
        res.status(200).json("TaxMaster Deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Update TaxMaster
const updateTaxMaster = async(req,res)=>{
    try {
        const {id} = req.params;
        const users = await TaxMaster.findByIdAndUpdate(id, req.body);
        if(!users) {
            return res.status(404).json("TaxMaster doesnt exist");
        }
        res.status(200).json("TaxMaster Updated successfully !");   
    } catch (error) {
        res.status(500).json({
            message: error.message,
        }); 
    }
};

// Delete all TaxMasters
const deleteAllTaxMasters = async (req, res) => {
    try {
        await TaxMaster.deleteMany({});
        res.status(200).json("All TaxMaster deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports={
    getTaxMasters,
    getTaxMaster,
    createTaxMaster,
    deleteTaxMaster,
    updateTaxMaster,
    deleteAllTaxMasters,
}