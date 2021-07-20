import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core';

import rootTheme from './theme';

import Layout from './layout';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		height: '100%',
		overflow: 'hidden',
		width: '100%',
	},
});

const App = () => {
	const classes = useStyles();
	const theme = createTheme(rootTheme);

	// TODO: Add mediaQuery to allow dark mode system preference to be set
	// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<Layout />
			</div>
		</ThemeProvider>
	);
};

export default App;
