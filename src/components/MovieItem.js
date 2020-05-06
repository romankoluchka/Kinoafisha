import React, { useState } from 'react';

const MovieItem = (props) => {
	const { movie, addMovieToWatchList, removeMovieFromWatchList } = props;
	const [isInWatchlist, setIsInWatchlist] = useState(false)

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
					{isInWatchlist === true ? (
						<button className='btn btn-success'
							onClick={() => {
								setIsInWatchlist(false)
								removeMovieFromWatchList(movie)
							}}>
							Remove from WatchList
						</button>
					) : (
							<button
								className='btn btn-secondary'
								onClick={() => {
									setIsInWatchlist(true)
									addMovieToWatchList(movie)
								}}>
								Add to WatchList
							</button>)}
				</div>
			</div>
		</div>
	);
};

export default MovieItem;