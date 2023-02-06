import styled from 'styled-components';
import succeed from '../../assets/images/Succeed.svg';
import failed from '../../assets/images/Failed.svg';
import { useRef } from 'react';
interface Props {
	label: string;
	ph?: string;
	criterias?: string;
	type: string;
	validate: (value: string) => boolean | undefined;
}

const Input = ({ label, ph, criterias, type, validate }: Props) => {
	const succeedSignRef = useRef<HTMLImageElement>(null);
	const failedSignRef = useRef<HTMLImageElement>(null);

	const handleChange = (element: HTMLInputElement | HTMLDataElement) => {
		const value = element.value;
		const validated = validate(value);

		succeedSignRef.current!.style.display = 'none';
		failedSignRef.current!.style.display = 'none';

		if (validated) {
			element.style.borderColor = '#98E37E';
			succeedSignRef.current!.style.display = 'block';
		} else {
			element.style.borderColor = '#EF5050';
			failedSignRef.current!.style.display = 'block';
		}
	};
	return (
		<StyledInputWrapper>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput placeholder={ph} type={type} onChange={(e) => handleChange(e.target)} />
			<StyledCriteria>{criterias}</StyledCriteria>
			<StyledSucceedSign src={succeed} ref={succeedSignRef} />
			<StyledFailedSign src={failed} ref={failedSignRef} />
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
const StyledSucceedSign = styled.img`
	height: 16.5px;
	width: 16.5px;
	position: absolute;
	top: 42%;
	right: 15px;
	display: none;
`;
const StyledFailedSign = styled.img`
	width: 21px;
	height: 18.75px;
	position: absolute;
	top: 42%;
	right: -30px;
	display: none;
`;
