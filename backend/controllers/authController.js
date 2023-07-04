const User = require('../models/userModel')


const loginUser = async (req,res) => {
  const { email,password } = req.body
  
  try{
    
      const user = await User.find({ email,password })

 
      if(user.length!=0)
      {
       console.log("Login Successful")
        return res.status(200).send({success:true, msg:"Login Successful"})
      }
      else{
        console.log("Invalid Credentials")
        return res.status(200).send({success:false, msg:"Invalid Credentials"})

      }
     
         
  
  } catch(error) {
           return res.send(error)
  }


}

const registerUser =  async (req,res) => {
 const { user,email, password } = req.body

 const userExits = await User.findOne({email})
 
 if(userExits){
    return res.status(200).send({success:false,msg:"User Already exist with this email."})
 }
 else {
    try{
    const newEntry = new User(req.body)
    newEntry.save()
    console.log(newEntry);

    return res.status(200).send({success:true, msg:"Registration Successfull"})

    } catch(error){

        return res.status(400).send({success:false,msg: error})
    }

 }
}

module.exports = {
    registerUser,
    loginUser
}