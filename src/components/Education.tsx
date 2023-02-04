import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';
import NavigationBtns from './Reusable/NavigationBtns';
import FormInnerWrapper from './Reusable/FormInnerWrapper';
import EducationForm from './EducationForm';
import AddMoreBtn from './Reusable/AddMoreBtn';

const Education = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='განათლება' page={3}>
				<FormInnerWrapper>
					<EducationForm />
					<AddMoreBtn value='სხვა სასწავლებლის დამატება' />
					<NavigationBtns />
				</FormInnerWrapper>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};
export default Education;

const StyledWrapper = styled.div`
	display: flex;
`;
