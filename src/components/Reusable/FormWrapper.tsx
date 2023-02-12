import React, { useEffect } from 'react';
import { useFormCtx } from '../../store/formContext';
import { StyledHeader, StyledWrapper } from './FormWrapper.styles';
import RestartBtn from './RestartBtn';

interface Props {
	children: React.ReactNode;
	heading: string;
	page: number;
}

const FormWrapper = ({ children, heading, page }: Props) => {
	const { currentForm } = useFormCtx();
	useEffect(() => currentForm.set(page), []);

	return (
		<StyledWrapper>
			<RestartBtn style={{}} />
			<StyledHeader>
				<h2>{heading}</h2>
				<span>{page}/3</span>
			</StyledHeader>
			{children}
		</StyledWrapper>
	);
};

export default FormWrapper;
