import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextField, Typography, makeStyles, Theme } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';

import { CITIES_URL, COUNTRIES_URL, LATEST_URL } from '../../../api/routes';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		border: `1px solid ${theme.palette.divider}`,
		display: 'flex',
		flexDirection: 'column',
		marginBottom: theme.spacing(1.5),
		padding: theme.spacing(2),
	},
	autocomplete: {
		width: '50%',
	},
	filterContainer: {
		display: 'flex',
	},
	title: {
		color: theme.palette.primary.main,
		marginBottom: theme.spacing(2),
	},
}));

const Filters = () => {
	const classes = useStyles();
	const [cities, setCities] = useState<any>([]);
	const [citiesList, setCitiesList] = useState<any>([]);
	const [country, setCountry] = useState<any>(null);
	const [countriesList, setCountriesList] = useState<any[]>([]);

	useEffect(() => {
		axios
			.get(COUNTRIES_URL)
			.then((res) => {
				setCountriesList(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onCityChange = (event: ChangeEvent<{}>, value: any[]) => {
		setCities(value);

		// if (value.length === 0) return;

		// axios
		// 	.get(`${LATEST_URL}?country=${value[0].country}&?city=${value[0].city}`)
		// 	.then((res) => {
		// 		console.log(res);
		// 		// setCitiesList(res.data.results);
		// 	})
		// 	.catch(() => {
		// 		// setCitiesList([]);
		// 	});
	};

	const onCountryChange = (event: ChangeEvent<{}>, value: any[]) => {
		setCountry(value);

		const city = {
			city: 'ANDERSON',
			count: 21946,
			country: 'US',
			firstUpdated: '2017-03-13T03:00:00+00:00',
			lastUpdated: '2020-11-05T16:00:00+00:00',
			locations: 2,
			parameters: ['o3'],
		};

		console.log(value);

		// setCities(value.length === 0 ? [] : [city]);
		// setCitiesList(value.length === 0 ? [] : [city]);

		// axios
		// 	.get(`${CITIES_URL}?country=US`)
		// 	.then((res) => {
		// 		setCitiesList(res.data.results);
		// 	})
		// 	.catch(() => {
		// 		setCitiesList([]);
		// 	});
	};

	return (
		<div className={classes.root}>
			<Typography className={classes.title} variant="h3">
				Filter
			</Typography>
			<div className={classes.filterContainer}>
				<Autocomplete
					className={classes.autocomplete}
					filterSelectedOptions
					getOptionLabel={(option) => option.name}
					id="countries-filter"
					onChange={onCountryChange}
					options={countriesList}
					renderInput={(params) => (
						<TextField
							{...params}
							color="primary"
							InputLabelProps={{ shrink: true }}
							label="Countries"
							placeholder="Filter by countries..."
							variant="outlined"
						/>
					)}
					value={country}
				/>
				<Autocomplete
					className={classes.autocomplete}
					filterSelectedOptions
					getOptionLabel={(option) => option.city}
					id="cities-filter"
					onChange={onCityChange}
					options={citiesList}
					renderInput={(params) => (
						<TextField
							{...params}
							color="primary"
							InputLabelProps={{ shrink: true }}
							label="Cities"
							placeholder="Filter by cities..."
							variant="outlined"
						/>
					)}
					value={cities}
				/>
			</div>
		</div>
	);
};

export default Filters;
