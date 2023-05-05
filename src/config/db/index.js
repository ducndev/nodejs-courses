const mongoose = require('mongoose');


async function connect() {
    try {
      await mongoose.connect('mongodb://localhost:27017/f8_education', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })  
      console.log('DB Connected Successfully');
    } catch (error) {
        console.log('Failed to Connect to DB!');
    }
}


module.exports = { connect };
