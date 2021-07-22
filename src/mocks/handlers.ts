import { rest } from 'msw';

import { COUNTRIES_URL } from '../api/routes';

const countriesList = [
	{
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
	},
];

const handlers = [
	rest.get(COUNTRIES_URL, (req, res, ctx) =>
		res(ctx.status(200), ctx.json({ results: countriesList }))
	),
];

export default handlers;
