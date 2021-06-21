const mongoose = require('mongoose');

const connectionString = 'mongodb://13.233.123.151/:27017/reactmern';
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
