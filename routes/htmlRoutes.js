const router = require('express').Router();
const path = require('path');
console.log('routes connected');
router.get('*', (req, res) => {
    console.log('I go there');
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    //senfFile means we're probaly sending html
  });

  module.exports = router;