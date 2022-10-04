//importing express, fs, and path packages
const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid').v4;
const {readFromFile, readAndAppend} = require('./helpers/fsUtils');

const PORT = process.env.PORT || 3001;

//importing db.json file
const noteData = require('./db/db.json');

//initializing app variable
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

//GET route for retrieving new note
app.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.json(JSON.parse(data))
    }
  });
}
);

//POST route for a new note
app.post('/api/notes', (req, res) => {
  const { title, text} = req.body;
  const newNote = {
    title,
    text,
    id: uuid(),
  }

  const response = {
    status: 'success',
    body: newNote,
  };

  readAndAppend(newNote, './db/db.json');
    res.json(response);
  
  });

//server listening
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


//read the file
  //parse into actual js object
//add new note to the object (db object)
  //turn object back into string and writeToFile back into db.json
  //note: everytime we need the front end and backend to communicate, we need api request