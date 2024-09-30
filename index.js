const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const userRouter = require("./Routes/user.routes.js");
const rootadminRouter = require("./Routes/rootadmin.routes.js");
const candidateRouter = require("./Routes/candidate.routes.js");
const masterRoutes = require("./Routes/master.routes.js");
const InvoiceDataRoutes = require("./Routes/InvoiceData.routes.js");
const customerRoutes = require('./Routes/customer.routes.js');
const masterproductRoutes = require("./Routes/masterproduct.routes.js");
const productRoutes = require("./Routes/product.routes.js");
const gstRoutes = require("./Routes/gst.routes.js");
const InvoicetypeRoutes = require("./Routes/Invoicetype.routes.js");
const TaxDetialsRoutes = require("./Routes/TaxDetial.routes.js")
const TaxMasterRoutes = require("./Routes/TaxMaster.routes.js");

app.use(express.json());  // Middleware to parse JSON bodies

app.use(cors({   // CORS setup
  origin: 'http://localhost:3000',
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.get('/', (req, res) => {
  res.send('Billing Software Backend is Running');
});

// Route handlers
app.use("/rootadmin", rootadminRouter); 
app.use("/user", userRouter); 
app.use("/candidate", candidateRouter); 
app.use("/api/master", masterRoutes); 
app.use("/invoicedata", InvoiceDataRoutes);
app.use('/customer', customerRoutes);
app.use("/masterproduct", masterproductRoutes);
app.use("/product", productRoutes);
app.use("/gst", gstRoutes);
app.use("/Invoicetype", InvoicetypeRoutes);
app.use("/TaxDetials", TaxDetialsRoutes);
app.use("/TaxMaster", TaxMasterRoutes);

const PocMernDB = "mongodb+srv://kevinmathew365:VzuczMR9LlxG4mT0@cluster0.nz5wrjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(PocMernDB)
  .then(() => {
    console.log("DB connected");
    app.listen(5002, () => {
      console.log('Server started on port 5002');
    });
  })
  .catch((err) => {
    console.log(err);
  });
