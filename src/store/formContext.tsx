import { createContext, useContext, useState, useEffect } from 'react';
import { Degree, FormCtx } from './FormContext-Types';
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
	isDone: false,
	setIsDone: () => {},
	degrees: [],
	setDegrees: () => {},
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
	const [isDone, setIsDone] = useState(false);
	const [degrees, setDegrees] = useState<Degree[]>([]);

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
				isDone,
				setIsDone,
				degrees,
				setDegrees,
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
