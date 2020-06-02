export const getYears = (fromDate) =>
	new Date(new Date() - new Date(fromDate)).getFullYear() - 1970;
