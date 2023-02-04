import styled from 'styled-components';
import Preview from './Preview/Preview';

const BuiltResume = () => {
	return (
		<StyledResume>
			<Preview style={{ border: '0.8px solid #000000', margin: '54px 0' }} />
		</StyledResume>
	);
};

export default BuiltResume;

const StyledResume = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;
