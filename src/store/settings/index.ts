import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { COMPLETE_MODE, LATEST_MODE } from '../../constants';

interface SettingsState {
	displayMode: string;
	useDarkMode: boolean;
}

const initialState = {
	displayMode: LATEST_MODE,
	useDarkMode: false,
} as SettingsState;

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setDisplayMode: (draft, action: PayloadAction<string>) => {
			draft.displayMode = action.payload;
		},
		toggleDarkMode: (draft, action: PayloadAction<boolean>) => {
			draft.useDarkMode = action.payload;
		},
	},
});

export const { setDisplayMode, toggleDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;
