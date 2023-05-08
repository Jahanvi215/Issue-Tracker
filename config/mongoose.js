const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tharujahanvi215:Jahanvi123@cluster0.bb9unvz.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('-->Connected to Database :: MongoDB<--');
});

module.export = db;
