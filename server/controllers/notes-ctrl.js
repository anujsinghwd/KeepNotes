const notes = require('../models/notes');

var add_note = (req) => {
  let response;
  let status;
  console.log(req);
  if(req.body.title && req.body.body)
  {
      let img_src = (req.body.img_src) ? req.body.img_src : "http://www.gavaghan.ca/wp-content/uploads/2014/09/placeholder.png";
      var note = notes.addNote(req.body.title, req.body.body, img_src);
      if(note)
      {
        status = 201;
        response = {"status": 201, "message": "notes created successfully"};
      }
      else
      {
        status = 400;
        response = {"status": 400, "message": "Note already exists"};
      }
  }
  else
  {
    status = 400;
    response = {"status": 400, "message": "pass valid parameters"};
  }
  return [status, response];
};

var read_note = (req) => {
  let response;
  let status;
  if(req.body.title)
  {

      var note = notes.getNote(req.body.title);
      if(note)
      {
        status = 200;
        response = {"status": 200 ,"data": note};
      }
      else
      {
        status = 400;
        response = {"status": 400, "message": "Note not found"};
      }
  }
  else
  {
    status = 400;
    response = {"status": 400, "message": "pass valid parameters"};
  }
  return [status, response];
};

var read_all = (req) => {
  let response;
  let status;
  var notesList = notes.getAll();
  if(notesList)
  {
    status = 200;
    response = {"status": 200 ,"data": notesList};
  }
  else
  {
    status = 400;
    response = {"status": 400, "message": "Notes not found"};
  }
  return [status, response];
}

var remove_note = (req) => {
  let response;
  let status;
  if(req.body.title)
  {
      var note = notes.removeNote(req.body.title);
      if(note)
      {
        status = 200;
        response = {"status": 200 ,"message": "note removed successfully"};
      }
      else
      {
        status = 400;
        response = {"status": 400, "message": "Note not found"};
      }
  }
  else
  {
      status = 400;
      response = {"status": 400, "message": "pass valid parameters"};
  }
  return [status, response];
};

module.exports = {
    remove_note,
    add_note,
    read_note,
    read_all
}
