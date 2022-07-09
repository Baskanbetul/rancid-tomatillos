// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MovieContainer from './MovieContainer.js'
import movieData from './movieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return(
      <main className='App'>
        <MovieContainer movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
