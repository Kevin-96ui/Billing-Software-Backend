// For TaxDetial operation
const TaxDetial = require("../Model/TaxDetial.model.js")

// All TaxDetials
const getTaxDetials=async (req,res)=>{
    try{
        const users=await TaxDetial.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    } 
};

// Single TaxDetial
const getTaxDetial=async (req,res)=>{
    try{
        const{id}=req.params;
        const users=await TaxDetial.findById(id);
        if(!users) {
            return res.status(404).json("TaxDetial doesnt exist");
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    } 
    };

//CREATE TaxDetial
const createTaxDetial=async(req,res)=>{
    try{
        const users = await TaxDetial.create(req.body);
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

// Delete TaxDetial
const deleteTaxDetial=async(req,res)=>{
    try {
        const {id} =req.params;
        const users = await TaxDetial.findByIdAndDelete(id);
        if(!users) {
            return res.status(404).json("TaxDetial doesnt exist");
        }
        res.status(200).json("TaxDetial Deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Update TaxDetial
const updateTaxDetial = async(req,res)=>{
    try {
        const {id} = req.params;
        const users = await TaxDetial.findByIdAndUpdate(id, req.body);
        if(!users) {
            return res.status(404).json("TaxDetial doesnt exist");
        }
        res.status(200).json("TaxDetial Updated successfully !");   
    } catch (error) {
        res.status(500).json({
            message: error.message,
        }); 
    }
};

// Delete all TaxDetial
const deleteAllTaxDetials = async (req, res) => {
    try {
        await TaxDetial.deleteMany({});
        res.status(200).json("All TaxDetial deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports={
    getTaxDetials,
    getTaxDetial,
    createTaxDetial,
    deleteTaxDetial,
    updateTaxDetial,
    deleteAllTaxDetials,
}