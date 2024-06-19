const mongoose = require("mongoose");

connectDB()
  .then((res) => {
    console.log("DB Connected Sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
    index: true,
    unique: true,
    uppercase: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: 400,
  },
  discount: {
    type: Number,
    default: 0,
  },
  genre: {
    type: [String],
  },
  category: {
    type: String,
    enum: ["Fictional", "Non-Fictional"],
  },
});

/************************************************************************************************************************************* */
