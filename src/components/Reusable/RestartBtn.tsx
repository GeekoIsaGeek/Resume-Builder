import React from 'react';
import { StyledBtnBack } from './FormWrapper.styles';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useFormCtx } from '../../store/formContext';
import initialResumeState from '../../store/initialResumeState';

const RestartBtn = ({ style }: { style: React.CSSProperties }) => {
	const navigate = useNavigate();
	const { setResumeData } = useFormCtx();

	const handleClick = () => {
		sessionStorage.removeItem('data');
		setResumeData(initialResumeState);
		navigate('/');
	};
	return (
		<StyledBtnBack onClick={() => handleClick()} style={style}>
			<IoIosArrowBack />
		</StyledBtnBack>
	);
};

export default RestartBtn;
