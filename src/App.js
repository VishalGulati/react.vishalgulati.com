import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import Placeholder from './components/Placeholder/Placeholder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Placeholder />
        <AppFooter />
      </div>
    );
  }
}

export default App;
