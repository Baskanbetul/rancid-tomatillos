// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MovieContainer from './MovieContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  render() {
    return(
      <main className='App'>
        <h1>BlueBee</h1>
      </main>
    )
  }
}

export default App;
