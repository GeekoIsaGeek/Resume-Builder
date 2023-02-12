import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useFormCtx } from '../../store/formContext';
import { Experience, Education } from '../../store/FormContext-Types';
import initialResumeState from '../../store/initialResumeState';

const NavigationBtns = () => {
	const navigate = useNavigate();
	const { forms, currentForm, resumeData, setValidationFailed, setIsDone, setResumeData } = useFormCtx();
	const currentFormIdx = currentForm.get;

	const buttonsWrapperStyles = {
		display: 'flex',
		justifyContent: `${currentFormIdx > 1 ? 'space-between' : 'flex-end'}`,
	};

	const areAllValid = (properties: (Experience | Education)[]) => {
		setValidationFailed(false);
		// exclude additional forms that are unfilled
		const filledForms = properties.filter((formData) =>
			Array.from(Object.values(formData)).some((field) => field.value)
		);
		return filledForms.every((form) => Array.from(Object.values(form)).every((property) => property.valid));
	};

	const isPersonalInfoValid = () => {
		setValidationFailed(false);
		return (
			resumeData.name.valid &&
			resumeData.email.valid &&
			resumeData.image.valid &&
			resumeData.phone_number.valid &&
			resumeData.surname.valid
		);
	};

	const nextHandler = () => {
		if (currentFormIdx < 3) {
			if (currentFormIdx === 2) {
				// validate form of experiences
				areAllValid(resumeData.experiences)
					? navigate(`/resume/${forms[currentFormIdx]}`)
					: setValidationFailed(true);
			} else {
				isPersonalInfoValid() ? navigate(`/resume/${forms[currentFormIdx]}`) : setValidationFailed(true);
			}
		} else {
			// validate educations & handle submission
			if (areAllValid(resumeData.educations) && areAllValid(resumeData.experiences) && isPersonalInfoValid()) {
				setIsDone(true);
				sessionStorage.removeItem('data');
				navigate('/resume/preview');
			} else setValidationFailed(true);
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
			<StyledBtn onClick={() => nextHandler()}>{currentFormIdx < 3 ? 'შემდეგი' : 'დასრულება'}</StyledBtn>
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
