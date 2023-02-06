import styled from 'styled-components';

interface Props {
	label: string;
	ph: string;
}

const Textarea = ({ label, ph }: Props) => {
	const handleChange = (element: HTMLTextAreaElement) => {
		const value = element.value;
		if (value.trim().length > 0) {
			element.style.borderColor = '#98E37E';
		} else {
			element.style.borderColor = '#BCBCBC';
		}
	};
	return (
		<StyledTextareaWrapper>
			<StyledLabel>{label}</StyledLabel>
			<StyledTextarea placeholder={ph} onChange={(e) => handleChange(e.target)}></StyledTextarea>
		</StyledTextareaWrapper>
	);
};

export default Textarea;

const StyledTextareaWrapper = styled.div``;

const StyledLabel = styled.h3`
	font-size: 16px;
	font-weight: 600;
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
