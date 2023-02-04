import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';

const Experience = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='გამოცდილება' page={2}>
				<div>gfdgdfgdfg</div>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};

export default Experience;

const StyledWrapper = styled.div`
	display: flex;
`;
