const mongoose = require('mongoose');

main()
    .then((res)=>{
      console.log("Connected Successfully")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/library');

}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        min: 1
    },
    discount: {
        type:Number,
        default: 0
    },
    category:{
        type:String,
        enum: ["Fiction","Non-Fiction"]
    },
    genre: [String]
})

const Book = mongoose.model('Book',bookSchema);

let book1 = new Book({
    title: 'Atomic Habits',
    author: "James Clear",
    price: 650
})

book1.save()
