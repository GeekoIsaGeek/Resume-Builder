import styled from 'styled-components';

interface Props {
	label: string;
	ph: string;
	setter: (value: string) => void;
}

const Textarea = ({ label, ph, setter }: Props) => {
	const handleChange = (value: string) => {
		setter(value);
	};
	const handleBlur = (element: HTMLTextAreaElement) => {
		const value = element.value;
		if (label === 'აღწერა') {
			if (value.trim().length > 0) {
				element.style.borderColor = '#98E37E';
			} else {
				element.style.borderColor = '#EF5050';
			}
		} else {
			element.style.borderColor = '#98E37E';
		}
	};

	return (
		<StyledTextareaWrapper>
			<StyledLabel>{label}</StyledLabel>
			<StyledTextarea
				placeholder={ph}
				onChange={(e) => handleChange(e.target.value)}
				onBlur={(e) => handleBlur(e.target)}
			></StyledTextarea>
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
	padding: 13px 16px;
	font-size: 16px;
	font-weight: 400;
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.colors.inputBorder};
	outline-color: ${(props) => props.theme.colors.inputBorder};
	outline-width: 2px;
	min-height: 105px;
`;
