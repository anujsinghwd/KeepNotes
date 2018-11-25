import React, { Component } from 'react';

class NotesForm extends Component {

  addNote(event){
      event.preventDefault();
      let title = this.refs.title.value;
      let body = this.refs.body.value;
      let img = this.refs.imgSrc.value;
      this.props.add_note(title, body, img);
      this.refs.title.value = '';
      this.refs.body.value = '';
      this.refs.imgSrc.value = '';
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

              <div class="row">
                <div class="input-field col s12">
                  <input id="src" type="url" ref="imgSrc" class="validate" placeholder="http://www.gavaghan.ca/wp-content/uploads/2014/09/placeholder.png" />
                  <label for="src">Image URL</label>
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
