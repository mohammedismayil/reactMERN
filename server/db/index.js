const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/reactmern';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(connectionString, options)
.then(() => console.log("Data base connected"))
.catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
