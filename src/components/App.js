import React from "react";
import { API_URL, API_KEY } from '../api';
import { MovieItem } from './MovieItem';
import { MovieTabs } from './MovieTabs';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      watchList: [],
      sort_by: 'popularity.desc'
    };
  }

  componentDidMount() {
    this.getMovie()
  }

  componentDidUpdate(prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovie();
    }
  };

  getMovie = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${this.state.sort_by}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results
        })
      })
  };

  addMovieToWatchList = movie => {
    const updateMoviesWatchList = [...this.state.watchList, movie];
    this.setState({ watchList: updateMoviesWatchList })
  };

  removeMovieFromWatchList = movie => {
    const updateMovies = this.state.watchList
      .filter((item) => {
        return item.id !== movie.id;
      });
    this.setState({ watchList: updateMovies })
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <div className='row mb-4'>
              <div className='col-12'>
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className='row'>
              {this.state.movies.map(movie => {
                return (
                  <div className='col-6 mb-4' key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWatchList={this.addMovieToWatchList}
                      removeMovieFromWatchList={this.removeMovieFromWatchList}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='col-3'>
            <p>My Watchlist: {this.state.watchList.length} {this.state.watchList.length === 1 ? 'film' : 'films'} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

