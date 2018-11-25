import React, { Component } from 'react';
import './App.css';
import './custom.css';
import Header from './components/Header';
import NotesForm from './components/NotesForm';
const API_URL = 'http://localhost:5000/apis/notes';

class App extends Component {

  addNotes(title, body)
  {
    let finalURL = `${API_URL}/addNote`;
    fetch(finalURL,
    {
      method: "POST",
      headers:
      {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

      },
      body: JSON.stringify({title: title, body: body})
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
   .catch((error) => console.log('There was a problem in fetching data '+error));
  }

  render() {
    return (
      <div>
        <Header />
        <NotesForm add_note={this.addNotes.bind(this)}/>
      </div>
    );
  }
}

export default App;
