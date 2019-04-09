import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import Placeholder from './components/Placeholder/Placeholder';
import Me from './components/Me/Me';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      });
    }, 1500);
  }
  render() {
    return (
      <div className="App">
        <AppHeader />
        {this.state.isLoaded ? <Me /> : <Placeholder />}
        <AppFooter />
      </div>
    );
  }
}

export default App;
