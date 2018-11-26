import React, { Component } from 'react';

class NoteCard extends Component {
  //let imgSrc = this.props.img_src;

  //let createdOn = this.props.createdOn;
  //v-on:click="removeNote(index)"

  deleteNote(title, t){
    this.props.delete_note(title);
  }

  render(){
    let title = this.props.title;
    let body = this.props.body;
    let timestamp = this.props.time_stamp;
    return(
      <div>
        <div className="col s12 m6 l3">
          <div className="card white hoverable">
            <div className="card-image">
              <img alt="" src={this.props.image} />
              <span className="card-title">{title}</span>
              <a onClick={this.deleteNote.bind(this, title)} className="btn-floating halfway-fab waves-effect waves-light amber darken-4"><i className="material-icons">delete<p style={{display: 'none'}}>{title}</p></i></a>
            </div>
            <div className="card-content">
              <p>
                {body}
              </p>
            </div>
            <div className="card-action orange-text">Created on: <i>{timestamp}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteCard;
