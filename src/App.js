// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MovieContainer from './MovieContainer.js'
import movieData from './movieData';
import FocusCard from './FocusCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      individualMovie: null
    }
  }

  handleChange = (id) => {
    // console.log(id, "ID!!!!")
    const movie = this.state.movies.find(movie => movie.id === id)
    this.setState({individualMovie: movie})
  }

  handleClick = (event) => {
    this.setState({individualMovie: null})
  }

  render() {
    return(
      <main className='App'>
      <header>
        <button onClick={this.handleClick}>
        Moldy Pears
        </button>
      </header>
      {this.state.individualMovie ? <FocusCard movie={this.state.individualMovie}/> : <MovieContainer movies={this.state.movies} handleChange={this.handleChange} /> }
      </main>
    )
   }
}


export default App;
