const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vedanshshrivastava077:Vedansh077@cluster0.jcjwe.mongodb.net/')
.then(()=>{
  console.log("mogodbconnect");
}).catch((err)=>{
  console.log(err);
})


const userSchema = new mongoose.Schema={
      username :{
          type : String,
          require : true
      },
      firstname :{
        type : String,
        require : true
      },
      lastname : {
        type : String,
        require : true
      },
      password :{
        type : String,
        require : true
      }
}

const User = new mongoose.model("User",userSchema);

module.exports = {
  User
}