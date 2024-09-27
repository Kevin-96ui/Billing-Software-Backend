const Master = require("../Model/master.model.js");

// Fetch all master details
const getmasterdetials = async (req, res) => {
  try {
    const masterdetials = await Master.find({});
    res.status(200).json(masterdetials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single master detail
const getmasterdetial = async (req, res) => {
    try {
      const { id } = req.params;
      const masterdetial = await Master.findById(id);
      if (!masterdetial) {
        return res.status(404).json("Master detail doesn't exist");
      }
      res.status(200).json(masterdetial);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Create a master detail
const createmasterdetail = async (req, res) => {
  try {
    const { type, value } = req.body;

    // Validate that required fields are present
    if (!type || !value) {
      return res.status(400).json({ message: "Type and value are required" });
    }

    // Create the master detail
    const masterdetail = await Master.create({ type, value });

    // Send the created master detail in the response
    res.status(200).json(masterdetail);
  } catch (error) {
    console.error("Error creating master detail:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a master detail
const deletemasterdetial = async (req, res) => {
    try {
      const { id } = req.params;
      const masterdetial = await Master.findByIdAndDelete(id);
      if (!masterdetial) {
        return res.status(404).json("Master detail doesn't exist");
      }
      res.status(200).json("Master detail deleted");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };  
  

// Update a master detail
const updatemasterdetial = async (req, res) => {
    try {
      const { id } = req.params;
      const { type, value } = req.body;
      const updatedMasterDetail = await Master.findByIdAndUpdate(
        id,
        { type, value },
        { new: true, runValidators: true }
      );
      if (!updatedMasterDetail) {
        return res.status(404).json("Master detail does not exist");
      }
      res.status(200).json(updatedMasterDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  

// Fetch gender options from Master collection
const getGenderOptions = async (req, res) => {
  try {
    const genders = await Master.find({ type: 'gender' }).select('value -_id');
    const genderOptions = genders.map(g => g.value);
    res.status(200).json(genderOptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getmasterdetials,
  getmasterdetial,
  createmasterdetail,
  deletemasterdetial,
  updatemasterdetial,
  getGenderOptions,
};
