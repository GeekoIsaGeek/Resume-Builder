import { createContext, useContext, useState } from 'react';
import { FormCtx } from './FormContext-Types';
import initResume from './initialResumeState';

const formCtx = createContext<FormCtx>({
	forms: [],
	currentForm: {
		get: 1,
		set: () => {},
	},
	resumeData: initResume,
	setResumeData: () => {},
});

interface Props {
	children: React.ReactNode;
}

const FormContextProvider = ({ children }: Props) => {
	const forms = ['personal-info', 'experience', 'education'];
	const [currForm, setCurrForm] = useState(1);
	const [resumeData, setResumeData] = useState(initResume);

	const currentForm = {
		get: currForm,
		set: setCurrForm,
	};

	return (
		<formCtx.Provider
			value={{
				forms,
				currentForm,
				resumeData,
				setResumeData,
			}}
		>
			{children}
		</formCtx.Provider>
	);
};

export const useFormCtx = () => {
	return useContext(formCtx);
};

export default FormContextProvider;
