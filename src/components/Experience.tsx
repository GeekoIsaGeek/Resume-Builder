import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';
import NavigationBtns from './Reusable/NavigationBtns';
import FormInnerWrapper from './Reusable/FormInnerWrapper';
import ExperienceForm from './ExperienceForm';

const Experience = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='გამოცდილება' page={2}>
				<FormInnerWrapper>
					<ExperienceForm />
					<StyledButton onClick={(e) => e.preventDefault()}>მეტი გამოცდილების დამატება</StyledButton>
					<NavigationBtns />
				</FormInnerWrapper>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};

export default Experience;

const StyledWrapper = styled.div`
	display: flex;
`;
const StyledButton = styled.button`
	background-color: #62a1eb;
	color: white;
	border-radius: 4px;
	border: none;
	outline: unset;
	font-size: 16px;
	font-weight: 500;
	padding: 14px 21px;
	width: 290px;
	margin-bottom: 110px;
	cursor: pointer;
	transition: background 0.2s ease-out;
	&:hover {
		background: #4d90dd;
	}
`;
