import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={}

  componentDidMount() {
    this.getMovies();
  }

  callApi = () => {
    return fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b2eeb8086c84342e951bcf03c78d3e2e')
      .then( response => response.json())
      .then( json => json.results)
  }

  getMovies = async () => {
    const movies = await this.callApi();
    this.setState({
      movies
    })
  }

  renderMovies = () => {
    const posterPath = 'https://image.tmdb.org/t/p/w500/';
    console.log(this.state.movies);
    const movies = this.state.movies.map( movie =>
      <><img src={posterPath + movie.poster_path}></img><h1>{movie.original_title}</h1></>
    );

    return movies
  }

  render() {
    return (
      <div>
        {this.state.movies ? this.renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;