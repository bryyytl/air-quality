import React, { MouseEvent, useState } from 'react';
import { TableChartSharp, ViewColumnSharp } from '@material-ui/icons';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const DisplayMode = () => {
	const [displayMode, setDisplayMode] = useState<string | null>('latest');

	const onModeChange = (event: MouseEvent<HTMLElement>, mode: string | null) => {
		if (mode !== null) setDisplayMode(mode);
	};

	return (
		<ToggleButtonGroup
			aria-label="display mode"
			exclusive
			onChange={onModeChange}
			value={displayMode}
		>
			<ToggleButton aria-label="latest" value="latest">
				<ViewColumnSharp />
			</ToggleButton>
			<ToggleButton aria-label="complete history" value="complete history">
				<TableChartSharp />
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default DisplayMode;
