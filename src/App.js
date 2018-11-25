import React, { Component } from 'react';
import './App.css';
import './custom.css';
import 'react-notifications/lib/notifications.css';
import Header from './components/Header';
import NotesForm from './components/NotesForm';
import NoteCard from './components/NoteCard';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const API_URL = 'http://localhost:5000/apis/notes';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      notes_data: []
    };
  }

  componentDidMount(){
    this.getNotes();
  }

  getNotes()
  {
    let finalURL = `${API_URL}/getAllNote`;
    fetch(finalURL)
    .then((res) => res.json())
    .then((data) => {
      if(data['status'] === 200)
      {
        this.setState({notes_data: data['data']});
      }
      else
      {
        NotificationManager.warning(data['message'],'WARNING',  3000);
      }
    })
   .catch((error) => console.log('There was a problem in fetching data '+error));
  }

  deleteNotes(title)
  {
    let finalURL = `${API_URL}/removeNote`;
    fetch(finalURL,
    {
      method: "POST",
      headers:
      {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

      },
      body: JSON.stringify({title: title})
    })
    .then((res) => res.json())
    .then((data) => {
      if(data['status'] === 200)
      {
          let filteredNotes = this.state.notes_data.filter((note) => note.title !== title);
          this.setState({notes_data: []});
          this.setState({notes_data: filteredNotes});
          NotificationManager.success('Note deleted successfully','Deleted');
      }
      else
      {
        NotificationManager.warning(data['message'],'WARNING',  3000);
      }
    })
   .catch((error) => console.log('There was a problem in fetching data '+error));
  }

  addNotes(title, body, img)
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
      body: JSON.stringify({title: title, body: body, img_src: img})
    })
    .then((res) => res.json())
    .then((data) => {
      if(data['status'] === 201)
      {
          let d = new Date();
          var timestamp = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes();
          this.setState({
              notes_data: this.state.notes_data.concat({"title": title, "body": body, "timestamp": timestamp, "img_src": img})
            });
          NotificationManager.success('Note created successfully','Created');
      }
      else
      {
        NotificationManager.warning(data['message'],'WARNING',  3000);
      }
    })
   .catch((error) => console.log('There was a problem in fetching data '+error));
  }

  render() {
    let notes;
    if(this.state.notes_data){
      notes = this.state.notes_data.map((data, i) => {
          return <NoteCard key={i} image={data['img_src']} time_stamp={data['timestamp']} title={data['title']} body={data['body']} delete_note={this.deleteNotes.bind(this)}/>;
      });

    }
    return (
      <div>
        <Header />
        <NotesForm add_note={this.addNotes.bind(this)}/>
          <div className="row">
            {notes}
          </div>
        <NotificationContainer/>
      </div>
    );
  }
}

export default App;
