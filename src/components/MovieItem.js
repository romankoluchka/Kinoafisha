import React from 'react';

class MovieItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isInWatchlist: false,
		};
	}

	render() {
		const { movie, addMovieToWatchList, removeMovieFromWatchList } = this.props;

		return (
			<div className='card'>
				<img className='card-img-top'
					src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
					alt=''
				/>
				<div className='card-body'>
					<h6 className='card-title'>{movie.title}</h6>
					<div className='d-flex justify-content-between align-items-center'>
						<p className='mb-0'>Rating: {movie.vote_average}</p>
						{this.state.isInWatchlist === true ? (
							<button className='btn btn-success'
								onClick={() => {
									this.setState({
										isInWatchlist: false
									});
									removeMovieFromWatchList(movie)
								}}>
								Remove from WatchList
							</button>
						) : (
								<button
									className='btn btn-secondary'
									onClick={() => {
										this.setState({
											isInWatchlist: true
										})
										addMovieToWatchList(movie)
									}}>
									Add to WatchList
								</button>)}
					</div>
				</div>
			</div>
		);
	}
}



export default MovieItem;