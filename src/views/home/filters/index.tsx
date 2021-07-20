import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextField, Typography, makeStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';

import { CITIES_URL, COUNTRIES_URL, LATEST_URL } from '../../../api/routes';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'blue',
		border: '1px solid black',
		display: 'flex',
		marginBottom: theme.spacing(1.5),
		padding: theme.spacing(2),
	},
	autocomplete: {
		marginBottom: theme.spacing(1.5),
	},
}));

const Filters = () => {
	const classes = useStyles();
	const [cities, setCities] = useState<any>([]);
	const [citiesList, setCitiesList] = useState<any>([]);
	const [country, setCountry] = useState<any>([]);
	const [countriesList, setCountriesList] = useState<any[]>([]);

	useEffect(() => {
		const results = {
			cities: 810,
			code: 'US',
			count: 38263797455115,
			firstUpdated: '2013-03-07T00:00:00+00:00',
			lastUpdated: '2021-02-01T13:30:01+00:00',
			locations: 12520,
			name: 'United States of America',
			parameters: [
				'bc',
				'ch4',
				'co',
				'co2',
				'no',
				'no2',
				'o3',
				'pm1',
				'pm10',
				'pm25',
				'pressure',
				'relativehumidity',
				'so2',
				'temperature',
				'ufp',
				'um010',
				'um025',
				'um100',
			],
			sources: 167,
		};

		setCountriesList([results]);

		// axios.get(COUNTRIES_URL).then((res) => {
		// 	console.log(res.data.results);
		// 	// setCountriesList(res.data.results);
		// });
	}, []);

	const onCityChange = (event: ChangeEvent<{}>, value: any[]) => {
		setCities(value);

		axios
			.get(`${LATEST_URL}?country=${value[0].country}&?city=${value[0].city}`)
			.then((res) => {
				console.log(res);
				// setCitiesList(res.data.results);
			})
			.catch(() => {
				// setCitiesList([]);
			});
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

		setCitiesList([city]);

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
			<Autocomplete
				className={classes.autocomplete}
				filterSelectedOptions
				getOptionLabel={(option) => option.name}
				id="countries-filter"
				multiple
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
				multiple
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
	);
};

export default Filters;
