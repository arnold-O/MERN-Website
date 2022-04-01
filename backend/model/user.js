const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Jwt = require("jsonwebtoken");





const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
        // select:false
    }
})

// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
//   });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
  });
  

userSchema.methods.getJwtToken = function () {
    return Jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  };
  userSchema.methods.correctPassword = async function (enteredPassword
    ) {
      return  bcrypt.compareSync(enteredPassword, this.password);
    };

const User = mongoose.model('User', userSchema)

module.exports = User