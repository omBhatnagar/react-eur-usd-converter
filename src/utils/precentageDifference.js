const percentageDifference = (oldVal, newVal) => {
	return 100 * (Math.abs(oldVal - newVal) / oldVal);
};

export default percentageDifference;
