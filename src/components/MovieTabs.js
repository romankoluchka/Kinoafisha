import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export const MovieTabs = props => {
	const { sort_by, updateSortBy } = props;

	const handleClick = value => () => {
		updateSortBy(value)
	};

	return (
		<ButtonGroup variant='text' color='primary'>
			<Button variant={sort_by === 'popularity.desc' ? 'contained' : 'text'}
				onClick={handleClick('popularity.desc')}>
				Popularity</Button>
			<Button variant={sort_by === 'revenue.desc' ? 'contained' : 'text'}
				onClick={handleClick('revenue.desc')}>
				Revenue</Button>
			<Button variant={sort_by === 'vote_count.desc' ? 'contained' : 'text'}
				onClick={handleClick('vote_count.desc')}>
				Vote count</Button>
		</ButtonGroup>

	)
};

