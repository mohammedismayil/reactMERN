const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()
const connectionString = 'mongodb://mongo:27017/reactmern';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, options)
.then(() => console.log("Data base connected"))
.catch((e) => {
  console.log(process.env.MONGO_URI);
  console.log("Data base not connected");
  console.error('Connection error', e.message);
  
});

const db = mongoose.connection;

module.exports = db;
