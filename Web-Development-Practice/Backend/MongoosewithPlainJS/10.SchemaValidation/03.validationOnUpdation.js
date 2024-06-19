const mongoose = require("mongoose");

connectDB()
  .then(() => {
    console.log("Connected Successfully");
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
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [500, "Custom Error: Price is too Low for selling"],
  },
});

const Book = new mongoose.model("Book", bookSchema);

/********************************************************************** */

//By default schemaValidation doesn't occur on Updation, but we can enable it.
Book.findByIdAndUpdate(
  "6672a962105254524c6baa0f",
  { price: 100 },
  { runValidators: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });
