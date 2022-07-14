
import './App.css';
import { Component } from 'react';
import MovieContainer from './MovieContainer.js'
import movieData from './movieData';
import FocusCard from './FocusCard';
import {Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      individualMovie: null,
      error: null,
      movieTrailer: null
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
			.then((response) => response.json())
			.then((data) => {this.setState({movies: data.movies});
			})
			.catch((error) => {
        this.setState({ error:`Sorry looks like there is a server error, please try again later`});
			});
  }

  handleChange = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ individualMovie: data.movie });
			})
			fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(response => response.json())
      .then(data => {
        this.setState({movieTrailer:data.videos})
      })
  }

  handleClick = (event) => {
    this.setState({individualMovie: null, movieTrailer: null})
  }

  render() {
    return(
      <main className='App'>
      <header>
        <button onClick={this.handleClick}>Moldy Pears</button>
      </header>
        {this.state.error && <h1>{this.state.error}</h1>}
        {this.state.individualMovie ?
          <Route path={`/${this.state.individualMovie.id}`}render= { ()=> <FocusCard movie={this.state.individualMovie} trailer={this.state.movieTrailer}/>} />
          : <MovieContainer movies={this.state.movies} handleChange={this.handleChange} /> }
      </main>
    )
   }
}


export default App;
