const express = require("express");
const app = express();
const cors = require("cors");
const bookRoute = require("./routes/booksRoutes");

require("./connection/conn");
app.use(express.json());
app.use(cors());

app.use("/api/v1", bookRoute);

app.listen(3000,()=>{
    console.log("SERVER STARTED");
});