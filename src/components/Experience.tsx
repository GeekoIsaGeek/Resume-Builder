import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';
import NavigationBtns from './Reusable/NavigationBtns';

const Experience = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='გამოცდილება' page={2}>
				<StyledForm>
					<NavigationBtns />
				</StyledForm>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};

export default Experience;

const StyledWrapper = styled.div`
	display: flex;
`;
const StyledForm = styled.form``;
