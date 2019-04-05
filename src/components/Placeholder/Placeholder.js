import React, { Component } from 'react';
import logo from './logo.svg';
import './Placeholder.css';

class Placeholder extends Component {
  render() {
    return (
      <div className="placeholder">
        <div className="placeholder-header">
          <img src={logo} className="placeholder-logo" alt="logo" />
          <p>Loading the content in a short while...</p>
        </div>
      </div>
    );
  }
}

export default Placeholder;
