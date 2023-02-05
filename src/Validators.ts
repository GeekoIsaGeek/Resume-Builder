export const ValidateAndSetName = (value: string, setter: () => {}) => {
	if (value.length > 2) {
		const regex = /^[ა-ჰ]+$/g;
		return new RegExp(regex).test(value);
	}
};
