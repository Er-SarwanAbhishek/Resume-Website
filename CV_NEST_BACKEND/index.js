const express = require("express");
const cors = require("cors");
const MongoConnection = require("./database/MongoConnection");
const PORT = 5000;

const app = express();
MongoConnection();

app.use(express.json());    
app.use(cors());

// ROUTE API CALLING
app.use("/auth", require("./routes/Signup_Login"));
app.use("/user", require("./routes/UserData"));
app.use("/dashboard", require("./routes/AddTemplateData"));
app.use("/live", require("./routes/LiveTemplates"));
app.use("/contactform",require("./routes/ContactFormData"))

app.listen(PORT, () => console.log(`Server Connect on ${PORT}`))