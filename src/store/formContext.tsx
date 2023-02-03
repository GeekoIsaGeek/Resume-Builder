import { createContext, useContext } from 'react';

const formCtx = createContext({});

interface Props {
	children: React.ReactNode;
}

const FormContextProvider = ({ children }: Props) => {
	const forms: string[] = ['personal-info', 'experience', 'education'];
	return <formCtx.Provider value={{ forms }}>{children}</formCtx.Provider>;
};

export const useFormCtx = () => {
	return useContext(formCtx);
};

export default FormContextProvider;
