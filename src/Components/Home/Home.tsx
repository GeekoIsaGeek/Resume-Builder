import styled from 'styled-components';
import logo from '../../assets/images/Logo.png';
import watermark from '../../assets/images/watermark.png';
import background from '../../assets/images/home-bg.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<StyledWrapper>
			<header>
				<StyledLogo src={logo} />
			</header>
			<StyledWatermarkLogo src={watermark} />
			<Link to='/resume/personal-info'>
				<StyledButton>რეზიუმეს დამატება</StyledButton>
			</Link>
		</StyledWrapper>
	);
};

export default Home;

const StyledWrapper = styled.div`
	background-image: url(${background}) !important;
	min-width: 100%;
	min-height: 100vh;
	width: 1920px;
	height: 1080px;
	padding: 0 70px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0 70px;
	header {
		padding: 25px 0;
		width: 100%;
		border-bottom: 1px solid #1a1a1a;
	}
`;
const StyledLogo = styled.img`
	width: 236px;
	height: 38px;
`;
const StyledWatermarkLogo = styled.img`
	width: 299px;
	height: 299px;
	position: absolute;
	top: 473px;
	left: 1076px;
`;
const StyledButton = styled.button`
	font-size: 20px;
	color: white;
	background-color: #1a1a1a;
	border-radius: 8px;
	padding: 18px 126px;
	cursor: pointer;
	border: none;
	transition: 0.2s ease-out;
	margin-top: 424px;
	&:hover {
		background-color: #3a3a3a;
		box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
			rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
	}
`;
