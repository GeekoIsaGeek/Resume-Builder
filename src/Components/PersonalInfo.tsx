import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';

const PersonalInfo = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='პირადი ინფო' page={1}>
				<div>gfdgdfgdfg</div>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};

export default PersonalInfo;

const StyledWrapper = styled.div`
	display: flex;
`;
