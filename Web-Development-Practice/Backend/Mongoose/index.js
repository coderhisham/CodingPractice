const mongoose = require('mongoose');

main()
    .then((res)=>{
      console.log("Connected Successfully")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
  
})

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})

const User = mongoose.model('User',userSchema);

const Employee = mongoose.model('Employee',employeeSchema);

const user1 = new User({
  name: "Hisham",
  email: "hisham@proton.me",
  age: 20
});

const user2 = new User({
  name: "Hanan",
  email: "hanan@proton.me",
  age: 15
});

user1.save();
user2
  .save()
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });

User.insertMany([
  {name: 'Haniya', email: 'haniya@proton.me', age:11},
  {name: 'Haseena', email: 'haseena@proton.me', age:40},
  {name: 'Muneer', email: 'muneer@proton.me', age:45}
]).then((res)=>{
  console.log(res);
})


//Find

  User.find({}).then((res)=>{
    console.log(res);
  })

  // Age Greater than 40
  User.findOne({age:{$gt: 30}})
    .then((res)=>{
      console.log('Age Greater than 30:');
      console.log(res);
    })
    .catch((err)=>{
      console.log(err)
    })

  //findById()
  User.findById("65f81cdc20465c99418f6b16")
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    });


// Update
  User.updateOne({name:"Haseena"},{age: 41})
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

  User.updateMany({age:{$gt:40}},{email: 'sample@proton.me'})
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })


// Find and Update

  User.findOneAndUpdate({name:"Haseena"},{email: 'haseena@proton.me'},{new:true})
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })

  User.findByIdAndUpdate("65f81cdc20465c99418f6b16",{email: 'muneer@proton.me'},{new:true})
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })


