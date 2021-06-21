const mongoose = require('mongoose');

const connectionString = 'mongodb://13.233.123.151/:27017/reactmern';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
