const mongoose  = require('mongoose')

const connectDb = async () =>{

    try {
        const con = await mongoose.connect(process.env.MONGO_URL)
        if(con)
        {
            console.log(" Mongodb connected Successfully");
        }
        else
        {
            console.log("Not connected.Please Try Again later");
        }
       

    } catch (error) {
            
            console.log("Somthing went wrong");
            process.exit()
    }
}

module.exports = connectDb;