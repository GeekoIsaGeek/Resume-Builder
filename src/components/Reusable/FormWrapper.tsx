import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { StyledBtn, StyledBtnBack, StyledHeader, StyledWrapper } from './FormWrapper.styles';
import { useFormCtx } from '../../store/formContext';

interface Props {
	children: React.ReactNode;
	heading: string;
	page: number;
}

const FormWrapper = ({ children, heading, page }: Props) => {
	const navigate = useNavigate();
	const { forms } = useFormCtx();

	const buttonsWrapperStyles = {
		display: 'flex',
		justifyContent: `${page > 1 ? 'space-between' : 'flex-end'}`,
	};

	const nextHandler = () => {
		if (page < 3) {
			navigate(`/resume/${forms[page]}`);
		} else {
			console.log('Submitting Form');
		}
	};

	const backHandler = () => {
		if (page > 1) {
			navigate(`/resume/${forms[page - 2]}`);
		}
	};

	return (
		<StyledWrapper>
			<StyledBtnBack onClick={() => navigate('/')}>
				<IoIosArrowBack />
			</StyledBtnBack>
			<StyledHeader>
				<h2>{heading}</h2>
				<span>{page}/3</span>
			</StyledHeader>
			{children}
			<div style={buttonsWrapperStyles}>
				{page > 1 && <StyledBtn onClick={() => backHandler()}>უკან</StyledBtn>}
				<StyledBtn onClick={() => nextHandler()}>შემდეგი</StyledBtn>
			</div>
		</StyledWrapper>
	);
};

export default FormWrapper;
