const expresss = require("express");
const app = expresss();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 3030;

const connectDb = require("./config/db");
connectDb();



// middleware
app.use(expresss.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Port is working...");
})





app.listen(PORT,()=>{
    console.log(`connect to port:${PORT}`)
})