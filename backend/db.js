const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://agrawalarpit414:' + encodeURIComponent('Jaishreeram@123') + '@cluster0.bzo034h.mongodb.net/gofoodmern?retryWrites=true&w=majority';


const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err,data){
        if(err) console.log(err);
        else console.log(data);
    })
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = mongoDB;
