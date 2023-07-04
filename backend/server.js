const expresss = require("express");
const app = expresss();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 3030;
const authRoute = require("./routes/authRoute");
const connectDb = require("./config/db");
connectDb(); // db connection



// middleware
app.use(expresss.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Port is working...");
})


app.use("/auth",authRoute);


app.listen(PORT,()=>{
    console.log(`connect to port:${PORT}`)
})