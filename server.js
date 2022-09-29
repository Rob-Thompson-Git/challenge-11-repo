const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use('/', htmlRoutes);

// app.get('/api/terms', (req, res) => res.json(termData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


//read the file
  //parse into actual js object
//add new note to the object (db object)
  //turn object back into string and writeToFile back into db.json
  //note: everytime we need the front end and backend to communicate, we need api request