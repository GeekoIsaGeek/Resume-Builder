import { createContext, useContext, useState } from 'react';

interface Ctx {
	forms: string[];
	currentForm: {
		get: number;
		set: React.Dispatch<React.SetStateAction<number>>;
	};
}

const formCtx = createContext<Ctx>({
	forms: [],
	currentForm: {
		get: 1,
		set: () => {},
	},
});

interface Props {
	children: React.ReactNode;
}

const FormContextProvider = ({ children }: Props) => {
	const forms = ['personal-info', 'experience', 'education'];
	const [currForm, setCurrForm] = useState(1);
	const currentForm = {
		get: currForm,
		set: setCurrForm,
	};
	return <formCtx.Provider value={{ forms, currentForm }}>{children}</formCtx.Provider>;
};

export const useFormCtx = () => {
	return useContext(formCtx);
};

export default FormContextProvider;
