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
  },
});

const Book = new mongoose.model("Book", bookSchema);

//Insertion
let Book1 = new Book({
  title: "The Alchemist",
  author: "Poulo Coylo",
  price: 1500,
});

Book1.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Error- Validation Failed : Author attribute is Necessary
let Book2 = new Book({
  author: "Poulo Coylo",
  price: 1500,
});

Book2.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Error- Type Validation Failed : Price attribute should be a number or a string which can be typecasted to Number
let Book3 = new Book({
  title: "The Alchemist",
  author: "Poulo Coylo",
  price: "sdsa",
});

Book3.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//No Error: Because the value of price can be typecasted to Number
let Book4 = new Book({
  title: "The Alchemist",
  author: "Poulo Coylo",
  price: "1550",
});

Book4.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
