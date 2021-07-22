import React from 'react';
import { Typography, makeStyles, Theme } from '@material-ui/core';

import Filters from './filters';
import Results from './results';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
		padding: '64px 16px 0 16px',
	},
	contentContainer: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
	},
	content: {
		flex: '1 1 auto',
		overflow: 'hidden',
	},
	pageHeader: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		margin: theme.spacing(1.5, 0),
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.contentContainer}>
				<div className={classes.content}>
					<header className={classes.pageHeader}>
						<Typography color="secondary" variant="h1">
							Air Quality Comparison
						</Typography>
					</header>
					<Filters />
					<Filters />
					<Results />
				</div>
			</div>
		</div>
	);
};

export default Home;
