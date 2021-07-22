export interface Result {
	city: string;
	country: string;
	entity: string; // "government", "research", "community"
	id: number;
	isAnalysis: boolean;
	isMobile: boolean;
	name: string;
	lastUpdated: string;
	sensorType: string; // "reference grade"
}
