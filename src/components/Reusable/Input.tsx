import styled from 'styled-components';
import succeed from '../../assets/images/Succeed.svg';
import failed from '../../assets/images/Failed.svg';
import { useFormCtx } from '../../store/formContext';
interface Props {
	label: string;
	ph?: string;
	criterias?: string;
	type: string;
}

const Input = ({ label, ph, criterias, type }: Props) => {
	return (
		<StyledInputWrapper>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput placeholder={ph} type={type} />
			<StyledCriteria>{criterias}</StyledCriteria>
			{/* <StyledSucceedSign src={succeed} />
			<StyledFailedSign src={failed} /> */}
		</StyledInputWrapper>
	);
};

export default Input;

const StyledInputWrapper = styled.div`
	position: relative;
`;
const StyledLabel = styled.h3`
	font-size: 16px;
	font-weight: 600;
`;
const StyledInput = styled.input`
	padding: 14px 45px 14px 16px;
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.colors.inputBorder};
	outline-color: gray;
	font-weight: 400;
	margin: 8px 0px;
	width: 100%;
	min-width: 370px;
	font-size: 16px;
`;
const StyledCriteria = styled.p`
	color: #2e2e2e;
	font-weight: 300;
	font-size: 14px;
`;
const StyledSucceedSign = styled.img`
	height: 16.5px;
	width: 16.5px;
	position: absolute;
	top: 42%;
	right: 15px;
`;
const StyledFailedSign = styled.img`
	width: 21px;
	height: 18.75px;
	position: absolute;
	top: 42%;
	right: -30px;
`;
