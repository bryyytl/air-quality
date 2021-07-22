import React, { useCallback } from 'react';
import { makeStyles, Theme, Typography } from '@material-ui/core';

import { COMPLETE_MODE, LATEST_MODE } from '../../../constants';
import { useAppSelector } from '../../../store/hooks';

import CompleteMode from './CompleteMode';
import DisplayMode from './DisplayMode';
import LatestMode from './LatestMode';

const useStyles = makeStyles((theme: Theme) => ({
	header: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: theme.spacing(1.5),
	},
}));

const Results = () => {
	const classes = useStyles();
	const displayMode = useAppSelector((state) => state.settings.displayMode);

	const renderPageType = useCallback(() => {
		switch (displayMode) {
			case COMPLETE_MODE:
				return <CompleteMode />;
			case LATEST_MODE:
				return <LatestMode />;
			default:
				return null;
		}
	}, [displayMode]);

	return (
		<div>
			<div className={classes.header}>
				<Typography color="secondary" variant="h2">
					Results
				</Typography>
				<DisplayMode />
			</div>
			{renderPageType()}
		</div>
	);
};

export default Results;
