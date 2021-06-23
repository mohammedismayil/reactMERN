const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27018/reactmern'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
  
};
mongoose.connect(connectionString, options)
.then(() => console.log("Data base connected"))
.catch((e) => {
  console.log(process.env.MONGO_URI);
  console.log("Data base not connected");
  console.error('Connection error', e.message);
  
});

const db = mongoose.connection;
///
module.exports = db;
