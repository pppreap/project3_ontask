const mongoose = require('mongoose');

mongoose.connect( process.env.NODE_ENV|| 'mongodb://127.0.0.1:27017/ontaskDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
