var express = require('express');
var router = express.Router();
var notes = require('../controllers/notes-ctrl');

router.post('/addNote', function(req, res){
    let response = notes.add_note(req);
    //res.header("Access-Control-Allow-Origin", "*");
    return res.status(response[0]).send(response[1]);
});

router.post('/readNote', function(req, res){
    let response = notes.read_note(req);
    return res.status(response[0]).send(response[1]);
});

router.post('/removeNote', function(req, res){
    let response = notes.remove_note(req);
    return res.status(response[0]).send(response[1]);
});

router.get('/getAllNote', function(req, res){
    let response = notes.read_all(req);
    return res.status(response[0]).send(response[1]);
});

module.exports = router;
