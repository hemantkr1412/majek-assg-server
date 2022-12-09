import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken"; 


export const signup = async(req,res,next) =>{
  const {name,email,password} = req.body;
  
  let existingUser;
  try{
      existingUser = await Users.findOne({email});
  }catch(err){
      console.log(err)
  }
  if(existingUser){
      return  res.status(400).json({message:"User Already Exists Login Instead"})
  
  }

  const hassedpassword = bcrypt.hashSync(password)

  const user = new Users({
      name,
      email,
      password:hassedpassword,
  });
  try{
      await user.save();
  }
  catch(err){
      console.log(err)
  }
  return res.status(201).json({user})
}





export const login = async(req,res,next) =>{
    const {email,password} =  req.body;
    let existingUser;
    let token;
    try{
        existingUser = await Users.findOne({email})
        if(existingUser){
            token = jsonwebtoken.sign({
                name:existingUser.name,
                email:existingUser.email},
                "djjlkdsjfsdfi35435435",{expiresIn:"1h"
            });
        }
    }catch(err){
        console.log(err)
    }
    if(!existingUser){
        
        return res.status(400).json({message:"user does not Exists"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        
        return res.status(400).json({message:"Incorrect Password"})
    }
    return res.status(200).json({message:"Login successfull",token:token,user:existingUser})

    

}

export const getUsers = async(req,res,next) =>{
    return res.status(200).json({message:"Get Users"})
}
