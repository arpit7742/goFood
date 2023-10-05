const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db'); // Import the mongoDB function

mongoDB(); // Call the mongoDB function to establish the MongoDB connection

app.get('/', (req, res) => {
  res.send('Hello World!----');
});
app.use(express.json())
app.use('/api',require("./Routes/Creatuser")); 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
