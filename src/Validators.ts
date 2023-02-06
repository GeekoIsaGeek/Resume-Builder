export const ValidateName = (value: string) => {
	value = value.trim();
	if (value.length >= 2) {
		const regex = /^[ა-ჰ]+$/g;
		console.log(new RegExp(regex).test(value));
		return new RegExp(regex).test(value);
	}
};

export const ValidateEmail = (value: string) => {
	return new RegExp(/^[A-Za-z0-9._%+-]+@redberry\.ge$/).test(value);
};

export const ValidateNumber = (value: string) => {
	return new RegExp(/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/).test(value);
};
