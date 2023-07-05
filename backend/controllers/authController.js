const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const loginUser = async (req,res) => {
  const { email,password } = req.body
  
  try{
     
   const user = await User.findOne({email})

   if(user && (await bcrypt.compare(password, user.password)))
   {

    const tokenData = {
      _id: user._id,
      user:user.user,
      email:user.email
    }
    const token = jwt.sign(tokenData,"Secretkey123",{expiresIn:'30d'})
    return res.status(200).send({success:true, msg:"Login Successful.",token:token})

   }
   else{
    return res.status(200).send({success:false,msg:"Password do Not Match."})
   }

   

  
         
  
  } catch(error) {
           return res.send(error)
  }

}


const registerUser = async (req, res) => {
  const { user, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(200)
        .send({ success: false, msg: "Email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newEntry = await User.create({
      user: user,
      email: email,
      password: hashedPassword,
    }
    );

    return res
      .status(200)
      .send({ success: true, msg: "Registration successful." });

  } catch (error) {
    return res
      .status(500)
      .send({ success: false, msg: "Registration failed.", error: error });
  }
};


module.exports = {
    registerUser,
    loginUser
}