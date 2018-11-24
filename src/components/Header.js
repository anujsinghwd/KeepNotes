import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand wide">
                    <span className="title">Notez App</span>
                    <span className="commentary">Select a note or create one below</span>
                </span>
            </div>
        </nav>
      </div>
    );
  }
}

export default Header;
