import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';
import NavigationBtns from './Reusable/NavigationBtns';
import FormInnerWrapper from './Reusable/FormInnerWrapper';

const Education = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='განათლება' page={3}>
				<FormInnerWrapper>
					<StyledForm></StyledForm>
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
const StyledForm = styled.form``;
