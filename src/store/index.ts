import { configureStore } from '@reduxjs/toolkit';

import settings from './settings';

const store = configureStore({
	reducer: {
		settings,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
