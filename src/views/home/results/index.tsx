import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import DisplayMode from './DisplayMode';

const useStyles = makeStyles((theme) => ({
	header: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: theme.spacing(1.5),
	},
}));

const Results = () => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.header}>
				<Typography color="secondary" variant="h2">
					Results
				</Typography>
				<DisplayMode />
			</div>
		</div>
	);
};

export default Results;
