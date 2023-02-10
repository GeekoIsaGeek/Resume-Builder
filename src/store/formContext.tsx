import { createContext, useContext, useState, useEffect } from 'react';
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
	validationFailed: false,
	setValidationFailed: () => {},
});

interface Props {
	children: React.ReactNode;
}

const FormContextProvider = ({ children }: Props) => {
	const forms = ['personal-info', 'experience', 'education'];
	const [currForm, setCurrForm] = useState(1);
	const formData = JSON.parse(sessionStorage.getItem('data') as string);
	const [resumeData, setResumeData] = useState(formData || initResume);
	const [validationFailed, setValidationFailed] = useState(false);

	const currentForm = {
		get: currForm,
		set: setCurrForm,
	};

	useEffect(() => {
		sessionStorage.setItem('data', JSON.stringify(resumeData));
	}, [resumeData]);

	return (
		<formCtx.Provider
			value={{
				forms,
				currentForm,
				resumeData,
				setResumeData,
				validationFailed,
				setValidationFailed,
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
