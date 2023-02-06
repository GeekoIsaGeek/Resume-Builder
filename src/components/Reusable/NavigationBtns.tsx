import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useFormCtx } from '../../store/formContext';

const NavigationBtns = () => {
	const navigate = useNavigate();
	const { forms, currentForm } = useFormCtx();
	const currentFormIdx = currentForm.get;

	const buttonsWrapperStyles = {
		display: 'flex',
		justifyContent: `${currentFormIdx > 1 ? 'space-between' : 'flex-end'}`,
	};

	const nextHandler = () => {
		if (currentFormIdx < 3) {
			navigate(`/resume/${forms[currentFormIdx]}`);
		} else {
			// submit form
		}
	};

	const backHandler = () => {
		if (currentFormIdx > 1) {
			navigate(`/resume/${forms[currentFormIdx - 2]}`);
		}
	};
	return (
		<div style={buttonsWrapperStyles}>
			{currentFormIdx > 1 && <StyledBtn onClick={() => backHandler()}>უკან</StyledBtn>}
			<StyledBtn onClick={() => nextHandler()}>შემდეგი</StyledBtn>
		</div>
	);
};

export default NavigationBtns;

export const StyledBtn = styled.button`
	font-size: ${(props) => props.theme.fontSize.formBtn}
	font-weight: 500;
	background-color: ${(props) => props.theme.colors.formBtn};
    color:white;
    padding: 14px 35px;
    border-radius:4px;
    border:none;
    letter-spacing:0.1em;
    cursor:pointer;
    transition: background .2s ease-out;
    &:hover{
        background-color: ${(props) => props.theme.colors.formBtnHover}
    }
`;
