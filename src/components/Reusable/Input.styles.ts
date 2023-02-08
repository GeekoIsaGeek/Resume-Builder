import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
	position: relative;
`;
export const StyledLabel = styled.h3`
	font-size: 16px;
	font-weight: 600;
`;
export type InputProps = {
	inputType: string;
};
export const StyledInput = styled.input<InputProps>`
	padding: 14px ${(props) => (props.inputType === 'date' ? '16px' : '45px')} 14px 16px;
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.colors.inputBorder};
	font-weight: 400;
	outline-color: ${(props) => props.theme.colors.inputBorder};
	outline-width: 2px;
	margin: 8px 0px;
	width: 100%;
	min-width: 370px;
	font-size: 16px;
	&::-webkit-calendar-picker-indicator {
		width: 18px;
		height: 20px;
	}
`;
export const StyledCriteria = styled.p`
	color: #2e2e2e;
	font-weight: 300;
	font-size: 14px;
`;

export const StyledSucceedSign = styled.img`
	height: 16.5px;
	width: 16.5px;
	position: absolute;
	top: 42%;
	right: 15px;
	display: none;
`;
export const StyledFailedSign = styled.img`
	width: 21px;
	height: 18.75px;
	position: absolute;
	top: 42%;
	right: -30px;
	display: none;
`;
