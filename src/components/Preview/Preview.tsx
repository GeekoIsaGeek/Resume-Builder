import styled from 'styled-components';
import logo from '../../assets/images/LOGO-12-1.png';
import Resume from './Resume';
import { useFormCtx } from '../../store/formContext';
import { Resume as ResumeTypes } from '../../store/FormContext-Types';

interface PreviewTypes {
	style?: React.CSSProperties;
	data: ResumeTypes;
}

const Preview = ({ style, data }: PreviewTypes) => {
	return (
		<StyledWrapper style={style}>
			<Resume data={data} />
			<StyledLogo src={logo} />
		</StyledWrapper>
	);
};
export default Preview;

const StyledWrapper = styled.div`
	background-color: white;
	padding: 48px 80px 44px 80px;
	width: 822px;
	min-height: 1080px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const StyledLogo = styled.img`
	height: 42px;
	width: 42px;
`;
