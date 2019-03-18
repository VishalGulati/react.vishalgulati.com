import React, { Component } from 'react';
import logo from './logo.svg';
import './Placeholder.css';

class Placeholder extends Component {
  render() {
    return (
      <div className="placeholder">
        <header className="placeholder-header">
          <img src={logo} className="placeholder-logo" alt="logo" />
          <p>
            Loading the content in a short while...
          </p>
        </header>
      </div>
    );
  }
}

export default Placeholder;
