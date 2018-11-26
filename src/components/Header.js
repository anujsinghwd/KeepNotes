import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
        <nav className="grey darken-3 header-style">
          <div className="nav-wrapper">
            <a>Keep Notes</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
