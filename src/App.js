
import './App.css';
import { Component } from 'react';
import MovieContainer from './MovieContainer.js'
import movieData from './movieData';
import FocusCard from './FocusCard';
import {Link, Route} from 'react-router-dom'
import fetchMovies from './apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      individualMovie: '',
      error: null,
      movieTrailer: null
    }
  }

  componentDidMount = () => {
    fetchMovies('').then(data => {
      this.setState({movies: data.movies});
    })
  }

  handleChange = (id) => {
    fetchMovies(`/${id}`).then(data => {
      this.setState({ individualMovie: data.movie,
    })
    fetchMovies(`/${id}/videos`).then( data => {
        this.setState({movieTrailer: data.videos})
    })
    });
  }

  handleClick = (event) => {
    this.setState({individualMovie: '', movieTrailer: null})
  }

  render() {
    return(
      <>
        <main className='App'>
          <header>
            <Link to ='/'>
            <button className="home-button" onClick={this.handleClick}>Moldy Pears</button>
            </Link>
          </header>
            {this.state.error && <h1>{this.state.error}</h1>}
        </main>
          <Route exact path="/">
              <MovieContainer movies={this.state.movies} handleChange={this.handleChange} />
          </Route>
          <Route exact path={`/${this.state.individualMovie.id}`}>
              <FocusCard movie={this.state.individualMovie} trailer={this.state.movieTrailer}/>
          </Route>
        </>
    )
   }
}


export default App;
