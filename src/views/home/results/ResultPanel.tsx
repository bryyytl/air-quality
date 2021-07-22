import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import TabPanel from '@material-ui/lab/TabPanel';

import { CITIES_URL, COUNTRIES_URL, LATEST_URL } from '../../../api/routes';
import { Result } from './interface';

import EmptyResultDisplay from './EmptyResultDisplay';
import ResultCard from './ResultCard';

const useStyles = makeStyles((theme: Theme) => ({
	gridContainer: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		// color: theme.palette.text.secondary,
	},
}));

interface Props {
	panelValue: string; // TAB_ONE or TAB_TWO
}

const ResultPanel = ({ panelValue }: Props) => {
	const classes = useStyles();
	const [results, setResults] = useState([]);

	const getResultContent = useCallback(() => {
		if (results.length === 0) return <EmptyResultDisplay />;

		return results.map((result: Result) => (
			<Grid key={result.id} item xs={12} sm={6}>
				<ResultCard result={result} />
			</Grid>
		));
	}, [results]);

	useEffect(() => {
		// const resultsUrl = `${LATEST_URL}?country=US&city=ANDERSON`;
		// axios
		// 	.get(resultsUrl)
		// 	.then((res) => {
		// 		setResults(res.data.results);
		// 		// setCitiesList(res.data.results);
		// 	})
		// 	.catch(() => {
		// 		// setCitiesList([]);
		// 	});
	}, []);

	return (
		<TabPanel value={panelValue}>
			<div className={classes.gridContainer}>
				<Grid container spacing={3}>
					{getResultContent()}
				</Grid>
			</div>
		</TabPanel>
	);
};

export default ResultPanel;
