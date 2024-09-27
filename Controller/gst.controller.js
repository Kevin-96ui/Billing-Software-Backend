const GST =require("../Model/gst.model.js")

// All detial
const getGSTs =async (req,res)=>{
    try{
        const users=await GST.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    } 
};

// Single detial
const getGST =async (req,res)=>{
    try{
        const{id}=req.params;
        const users=await GST.findById(id);
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
//CREATE
const createGST=async(req,res)=>{
    try{
        const users = await GST.create(req.body);
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

const deleteGST=async(req,res)=>{
    try {
        const {id} =req.params;
        const users = await GST.findByIdAndDelete(id);
        if(!users) {
            return res.status(404).json("User doesnt exist");
        }
        res.status(200).json("User Deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateGST = async(req,res)=>{
    try {
        const {id} = req.params;
        const users = await GST.findByIdAndUpdate(id, req.body);
        if(!users) {
            return res.status(404).json("GST doesnt exist");
        }
        res.status(200).json("GST Updated successfully !");   
    } catch (error) {
        res.status(500).json({
            message: error.message,
        }); 
    }
};
const deleteAllGSTs = async (req, res) => {
    try {
        await GST.deleteMany({});
        res.status(200).json("All users deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports={
    getGSTs,
    getGST,
    createGST,
    deleteGST,
    updateGST,
    deleteAllGSTs,
}