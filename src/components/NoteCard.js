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
    return(
      <div>
        <div className="col s12 m6 l3">
          <div className="card white hoverable">
            <div className="card-image">
              <img src="http://www.gavaghan.ca/wp-content/uploads/2014/09/placeholder.png" />
              <span className="card-title">{title}</span>
              <a onClick={this.deleteNote.bind(this, title)} className="btn-floating halfway-fab waves-effect waves-light amber darken-4"><i className="material-icons">delete<p style={{display: 'none'}}>{title}</p></i></a>
            </div>
            <div className="card-content">
              <p>
                {body}
              </p>
            </div>
            <div className="card-action orange-text">Created on: <i>2017-12-11</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteCard;
