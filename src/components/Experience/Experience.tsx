import Preview from '../Preview/Preview';
import FormWrapper from '../Reusable/FormWrapper';
import styled from 'styled-components';
import NavigationBtns from '../Reusable/NavigationBtns';
import FormInnerWrapper from '../Reusable/FormInnerWrapper';
import ExperienceForm from './ExperienceForm';
import AddMoreBtn from '../Reusable/AddMoreBtn';

const Experience = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='გამოცდილება' page={2}>
				<FormInnerWrapper>
					<ExperienceForm />
					<AddMoreBtn value='მეტი გამოცდილების დამატება' />
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
