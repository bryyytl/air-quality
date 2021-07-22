import React, { useEffect, useState } from 'react';
import { Chip, makeStyles, Theme } from '@material-ui/core';

import { Result } from './interface';

interface Props {
	result: Result;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(1, 0),
	},
	chip: {
		marginRight: theme.spacing(0.75),
	},
}));

const ResultTags = ({ result }: Props) => {
	const classes = useStyles();
	const [labelArray, setLabelArray] = useState<string[]>([]);

	useEffect(() => {
		const arr = [];

		arr.push(result.entity, result.sensorType, result.isMobile ? 'mobile' : 'stationary');
		if (result.isAnalysis) arr.push('Analysis');

		setLabelArray(arr);
	}, [result]);

	return (
		<div className={classes.root}>
			{labelArray.map((label) => (
				<Chip
					className={classes.chip}
					color="primary"
					label={label}
					key={`${result.id}-${label}-chip`}
					variant="outlined"
				/>
			))}
		</div>
	);
};

export default ResultTags;
