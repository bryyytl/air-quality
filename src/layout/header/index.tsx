import React from 'react';
import { AppBar, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Cloud } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
	logoContainer: {
		alignItems: 'center',
		display: 'flex',
		marginLeft: theme.spacing(1),
	},
	title: {
		color: theme.palette.text.secondary,
		marginLeft: theme.spacing(1),
	},
	toolbar: {
		alignItems: 'center',
		display: 'flex',
		height: '100%',
		justifyContent: 'space-between',
		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(0, 2),
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing(0, 1.5),
		},
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar elevation={0} position="fixed">
			<Toolbar className={classes.toolbar} disableGutters>
				<div aria-label="home" className={classes.logoContainer}>
					<Cloud color="secondary" fontSize="large" />
					<Typography className={classes.title} variant="h1">
						Air Quality Viewer
					</Typography>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
