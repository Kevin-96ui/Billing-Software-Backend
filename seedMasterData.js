// const mongoose = require('mongoose');
// const Master = require('../server/Model/master.model.js'); 

// const seedMasterData = async () => {
//   try {
//     const genders = [
//       { type: 'gender', value: 'NotMentioned' }, // Add here what are necessary s 
//       { type: 'gender', value: 'Pugal' }, // Add here what are necessary s 
//     ];

//     await Master.insertMany(genders);
//     console.log("Master data seeded");
//   } catch (error) {
//     console.error("Failed to seed master data", error);
//   } finally {
//     mongoose.connection.close(); // Close the connection after seeding
//   }
// };

// // Connect to your MongoDB database
// const PocMernDB = "mongodb+srv://kevinmathew365:VzuczMR9LlxG4mT0@cluster0.nz5wrjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(PocMernDB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log("Connected to DB, starting seeding process...");
//     seedMasterData();
//   })
//   .catch((err) => {
//     console.error("DB connection error:", err);
//   });
