import styled from 'styled-components';

interface Props {
	label: string;
	ph: string;
}

const Textarea = ({ label, ph }: Props) => {
	return (
		<StyledTextareaWrapper>
			<StyledLabel>{label}</StyledLabel>
			<StyledTextarea placeholder={ph}></StyledTextarea>
		</StyledTextareaWrapper>
	);
};

export default Textarea;

const StyledTextareaWrapper = styled.div``;

const StyledLabel = styled.h3`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 8px;
`;
const StyledTextarea = styled.textarea`
	resize: none;
	width: 100%;
	outline: unset;
	padding: 13px 16px;
	font-size: 16px;
	font-weight: 400;
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.colors.inputBorder};
	min-height: 105px;
`;
