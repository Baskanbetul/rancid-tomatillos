
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
      individualMovie: null,
      error: null
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
    .then(response => response.json())
    .then(data => {this.setState({ individualMovie: data.movie })})
  }

  handleClick = (event) => {
    this.setState({individualMovie: null})
  }

  render() {
    return(
      <main className='App'>
      <header>
        <button onClick={this.handleClick}>Moldy Pears</button>
      </header>
        {this.state.error && <h1>{this.state.error}</h1>}
        {this.state.individualMovie ? <FocusCard movie={this.state.individualMovie}/> : <MovieContainer movies={this.state.movies} handleChange={this.handleChange} /> }
      </main>
    )
   }
}


export default App;
