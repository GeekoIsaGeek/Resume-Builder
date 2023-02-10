import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { StyledBtnBack, StyledHeader, StyledWrapper } from './FormWrapper.styles';
import { useFormCtx } from '../../store/formContext';
import initialState from '../../store/initialResumeState';

interface Props {
	children: React.ReactNode;
	heading: string;
	page: number;
}

const FormWrapper = ({ children, heading, page }: Props) => {
	const navigate = useNavigate();
	const { currentForm, setResumeData } = useFormCtx();
	useEffect(() => currentForm.set(page), []);

	const handleClick = () => {
		sessionStorage.removeItem('data');
		setResumeData(initialState);
		navigate('/');
	};

	return (
		<StyledWrapper>
			<StyledBtnBack onClick={() => handleClick()}>
				<IoIosArrowBack />
			</StyledBtnBack>
			<StyledHeader>
				<h2>{heading}</h2>
				<span>{page}/3</span>
			</StyledHeader>
			{children}
		</StyledWrapper>
	);
};

export default FormWrapper;
