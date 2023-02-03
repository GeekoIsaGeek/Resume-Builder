import { createContext, useContext } from 'react';

interface Ctx {
	forms: string[];
}

const formCtx = createContext<Ctx>({
	forms: [],
});

interface Props {
	children: React.ReactNode;
}

const FormContextProvider = ({ children }: Props) => {
	const forms = ['personal-info', 'experience', 'education'];
	return <formCtx.Provider value={{ forms }}>{children}</formCtx.Provider>;
};

export const useFormCtx = () => {
	return useContext(formCtx);
};

export default FormContextProvider;
