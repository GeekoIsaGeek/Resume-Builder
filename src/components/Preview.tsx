import styled from 'styled-components';
import logo from '../assets/images/LOGO-12-1.png';

const Preview = () => {
	return (
		<StyledWrapper>
			<StyledResume>sdada</StyledResume>
			<StyledLogo src={logo} />
		</StyledWrapper>
	);
};

export default Preview;

const StyledWrapper = styled.div`
	background-color: white;
	padding: 48px 80px 44px 80px;
	width: 822px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const StyledResume = styled.div``;

const StyledLogo = styled.img`
	height: 42px;
	width: 42px;
`;
