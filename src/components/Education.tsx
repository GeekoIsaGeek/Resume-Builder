import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';
import NavigationBtns from './Reusable/NavigationBtns';

const Education = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='განათლება' page={3}>
				<StyledForm>
					<NavigationBtns />
				</StyledForm>
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
