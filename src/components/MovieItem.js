import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		width: 'auto',
	},
});

export const MovieItem = (props) => {

	const classes = useStyles();
	const { movie, addMovieToWatchList, removeMovieFromWatchList } = props;
	const [isInWatchlist, setIsInWatchlist] = useState(false);

	return (
		<Card className={classes.root}>
			<CardMedia
				component="img"
				alt={movie.title}
				height="auto"
				src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{movie.title}
				</Typography>
				<Typography variant="body" component="p">
					Rating: {movie.vote_average}
				</Typography>
			</CardContent>
			<CardActions>
				{isInWatchlist === true ?
					<Button color="secondary" variant="contained" outline
						onClick={() => {
							setIsInWatchlist(false)
							removeMovieFromWatchList(movie)
						}}>
						Remove from WatchList
        </Button> :
					<Button color="primary" variant="contained"
						onClick={() => {
							setIsInWatchlist(true)
							addMovieToWatchList(movie)
						}}>
						Add to WatchList
        </Button>}
			</CardActions>
		</Card>
	);
};
