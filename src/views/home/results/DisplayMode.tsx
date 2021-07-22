import React, { MouseEvent } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { TableChartSharp, ViewColumnSharp } from '@material-ui/icons';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import { COMPLETE_MODE, LATEST_MODE } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setDisplayMode } from '../../../store/settings';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		borderRadius: 0,
	},
	toggleButton: {
		borderRadius: 0,
		color: theme.palette.secondary.main,
		'&.MuiToggleButton-root.Mui-selected': {
			color: theme.palette.primary.main,
		},
	},
}));

const DisplayMode = () => {
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const displayMode = useAppSelector((state) => state.settings.displayMode);

	const onModeChange = (event: MouseEvent<HTMLElement>, mode: string | null) => {
		if (mode !== null) dispatch(setDisplayMode(mode));
	};

	return (
		<ToggleButtonGroup
			aria-label="display mode"
			className={classes.root}
			exclusive
			onChange={onModeChange}
			value={displayMode}
		>
			<ToggleButton
				aria-label={LATEST_MODE}
				className={classes.toggleButton}
				value={LATEST_MODE}
			>
				<ViewColumnSharp />
			</ToggleButton>
			<ToggleButton
				aria-label={COMPLETE_MODE}
				className={classes.toggleButton}
				value={COMPLETE_MODE}
			>
				<TableChartSharp />
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default DisplayMode;
