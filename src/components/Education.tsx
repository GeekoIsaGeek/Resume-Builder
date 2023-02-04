import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';

const Education = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='განათლება' page={3}>
				<div>gfdgdfgdfg</div>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};
export default Education;

const StyledWrapper = styled.div`
	display: flex;
`;
