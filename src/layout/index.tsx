import React from 'react';
import { makeStyles } from '@material-ui/core';

import Header from './header';
import Home from '../views/home';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		height: '100%',
		overflow: 'hidden',
		width: '100%',
	},
}));

const Layout = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Header />
			<Home />
		</div>
	);
};

export default Layout;
