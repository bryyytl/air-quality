import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles, Theme, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';

import { CITIES_URL, COUNTRIES_URL, LATEST_URL } from '../../../api/routes';
import { RESULT_TAB_ONE, RESULT_TAB_TWO } from '../../../constants';

import ResultPanel from './ResultPanel';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		flexGrow: 1,
	},
}));

const LatestMode = () => {
	const classes = useStyles();
	const [tabValue, setTabValue] = useState(RESULT_TAB_ONE);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		setTabValue(newValue);
	};

	return (
		<div className={classes.root}>
			<TabContext value={tabValue}>
				<AppBar position="static">
					<TabList onChange={handleChange} aria-label="simple tabs example">
						<Tab label="Filter #1" value={RESULT_TAB_ONE} />
						<Tab label="Filter #2" value={RESULT_TAB_TWO} />
					</TabList>
				</AppBar>
				<ResultPanel panelValue={RESULT_TAB_ONE} />
				{/* <ResultPanel panelValue={RESULT_TAB_TWO} /> */}
			</TabContext>
		</div>
	);
};

export default LatestMode;
