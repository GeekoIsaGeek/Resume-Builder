import styled from 'styled-components';

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
		</StyledInputWrapper>
	);
};

export default Input;

const StyledInputWrapper = styled.div``;
const StyledLabel = styled.h3`
	font-size: 16px;
	font-weight: 500;
`;
const StyledInput = styled.input`
	padding: 14px 16px;
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.colors.inputBorder};
	outline: unset;
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
