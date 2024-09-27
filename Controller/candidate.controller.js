const candidate = require("../Model/candidate.model.js");
const Master = require("../Model/master.model.js");

//All candidates
const getcandidates = async (req, res) => {
  try {
    const candidates = await candidate.find({});
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get a single candidate
const getcandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const candidates = await candidate.findById(id);
    if (!candidates) {
      return res.status(404).json("Candidate doesnt exist");
    }
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json(candidates);
  }
};
//To create a candidate
const createcandidate = async (req, res) => {
  try {
    const { email } = req.body;
    const existingcandidate = await candidate.findOne({ email });
    if (existingcandidate) {
      return res
        .status(400)
        .json({ message: "Candidate with same email id already exist" }); //400 already exist 404 not found 200 success 500bad request
    }
    const candidates = await candidate.create(req.body);
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//To Delete a candidate
const deletecandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const candidates = await candidate.findByIdAndDelete(id);
    if (!candidates) {
      return res.status(404).json("Candidate doesnt exist");
    }
    res.status(200).json("Candidate Deleted");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// To Update a candidate
const updatecandidate = async (req, res) => {
  try {
    const { email } = req.body;
    const { id } = req.params;

    // Check if another candidate with the same email exists
    const existingCandidate = await candidate.findOne({ email });
    if (existingCandidate && existingCandidate._id.toString() !== id) {
      return res.status(400).json({ message: "Candidate with this email already exists!" });
    }

    // Perform the update
    const updatedCandidate = await candidate.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updatedCandidate) {
      return res.status(404).json("Candidate does not exist");
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// // Fetch gender options from Master collection
// const getGenderOptions = async (req, res) => {
//   try {
//     console.log("Fetching gender options...");
//     const genders = await Master.find({ type: 'gender' }).select('value -_id');
//     console.log("Genders found:", genders);
//     const genderOptions = genders.map(g => g.value);
//     res.status(200).json(genderOptions);
//   } catch (error) {
//     console.error("Error fetching gender options:", error);
//     res.status(500).json({ message: error.message });
//   }
// };



module.exports = {
  getcandidates,
  getcandidate,
  createcandidate,
  deletecandidate,
  updatecandidate,
};

