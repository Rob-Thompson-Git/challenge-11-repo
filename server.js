const express = require('express');
const fs = require('fs');
const path = require('path');
// const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const termData = require('./db/db.json');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//GET
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

  //redirects to notes.html after submit clicked from index.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});



// app.post('/api/notes', (req, res) => {
//   console.info(`${req.method} start note app`)
// })

//GET route for api to return json data
// app.get('/api', (req, res) => {
//   res.json(termData)
// });

//server listening
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


//read the file
  //parse into actual js object
//add new note to the object (db object)
  //turn object back into string and writeToFile back into db.json
  //note: everytime we need the front end and backend to communicate, we need api request