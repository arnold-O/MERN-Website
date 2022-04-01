const User = require("../model/user")
const ErrorHandler = require("../utils/ErrorHandler")
const sendToken = require("../utils/jwtoken")


exports.reigisterUser = async(req,res, next)=>{
   const AlreadyExist = await User.findOne({email:req.body.email})
        if(AlreadyExist){

      return  res.status(400).json({
                message:'user already registered'
            })

        }
    
try{
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    newUser.save()

   sendToken(newUser, 201, res)

}catch(err){
    res.status(400).json({
        err
    })

}}


exports.loginuser = async(req, res, next)=>{
    const {email , password, name} = req.body
    if(!email || !password){
       next(new ErrorHandler('please enter ur credentials', 400))
    }

    const user = await User.findOne({email}).select('+password')

    if(!user){
        return next(new ErrorHandler('please enter valid credentials', 400))
    }

    const PasswordChecker = await user.correctPassword(password)
    console.log(PasswordChecker)



    if(!PasswordChecker){
        return next(new ErrorHandler("wrong credentials", 401));
    }

    sendToken(user, 200, res)



}