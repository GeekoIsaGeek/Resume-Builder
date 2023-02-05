import { createContext, useContext, useState } from 'react';
import { FormCtx } from './FormContext-Types';

const resume = {
	name: '',
	surname: '',
	email: '',
	phone_number: '',
	experiences: [
		{
			position: '',
			employer: '',
			start_date: '',
			due_date: '',
			description: '',
		},
	],
	educations: [
		{
			institute: '',
			degree: '',
			due_date: '',
			description: '',
		},
	],
	image: '',
	about_me: '',
};

const formCtx = createContext<FormCtx>({
	forms: [],
	currentForm: {
		get: 1,
		set: () => {},
	},
	resumeData: resume,
	setResumeData: () => {},
});

interface Props {
	children: React.ReactNode;
}

const FormContextProvider = ({ children }: Props) => {
	const forms = ['personal-info', 'experience', 'education'];
	const [currForm, setCurrForm] = useState(1);
	const [resumeData, setResumeData] = useState(resume);
	const currentForm = {
		get: currForm,
		set: setCurrForm,
	};

	return <formCtx.Provider value={{ forms, currentForm, resumeData, setResumeData }}>{children}</formCtx.Provider>;
};

export const useFormCtx = () => {
	return useContext(formCtx);
};

export default FormContextProvider;
