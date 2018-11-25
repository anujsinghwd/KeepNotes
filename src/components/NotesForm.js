import React, { Component } from 'react';

class NotesForm extends Component {

  addNote(event){
      event.preventDefault();
      let title = this.refs.title.value;
      let body = this.refs.body.value;
      this.props.add_note(title, body);
      this.refs.title.value = '';
      this.refs.body.value = '';
  }

  render(){
    return(
      <div>
        <div className="row container">
          <div className="col s12 l6 xl6 offset-l3 offset-xl3">
            <div className="col s12">
              <form onSubmit={this.addNote.bind(this)}>
              <div className="row">
                <div className="input-field col s12">
                  <input id="title" ref="title" type="text" className="validate" />
                  <label htmlFor="title">Title</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea id="body" ref="body" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea">Body</label>
                </div>
              </div>
              <button type="submit" className="waves-effect waves-light btn amber darken-4">Add Note</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesForm;