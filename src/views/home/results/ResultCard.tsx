import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

import { Result } from './interface';

// UI inspired by https://openaq.org/#/projects

import ResultTags from './ResultTags';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	title: {
		fontSize: 14,
	},
});

interface Props {
	result: Result;
}

const ResultCard = ({ result }: Props) => {
	const classes = useStyles();

	console.log(result);

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{new Date(result.lastUpdated).toLocaleString('en-US')}
				</Typography>
				<Typography variant="h5" component="h2">
					{`${result.name} in ${result.city}, ${result.country}`}
				</Typography>
				<ResultTags result={result} />
			</CardContent>
		</Card>
	);
};

export default ResultCard;
