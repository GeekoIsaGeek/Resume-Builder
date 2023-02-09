import succeed from '../../assets/images/Succeed.svg';
import failed from '../../assets/images/Failed.svg';
import { useRef, useState } from 'react';
import {
	StyledCriteria,
	StyledFailedSign,
	StyledInput,
	StyledInputWrapper,
	StyledLabel,
	StyledSucceedSign,
} from './Input.styles';
interface Props {
	label: string;
	ph?: string;
	criterias?: string;
	type: string;
	validate: (value: string) => boolean | undefined;
	setter: (value: string, isValid: boolean) => void;
}

const Input = ({ label, ph, criterias, type, validate, setter }: Props) => {
	const succeedSignRef = useRef<HTMLImageElement>(null);
	const failedSignRef = useRef<HTMLImageElement>(null);
	const [isValidated, setIsValidated] = useState(false);

	const handleFocus = () => {
		succeedSignRef.current!.style.display = 'none';
		failedSignRef.current!.style.display = 'none';
	};

	const handleChange = (value: string) => {
		const isValid = validate(value) as boolean;
		setIsValidated(isValid);
		if (type === 'date') {
			setter(value, value ? true : false);
		} else {
			setter(value, isValid);
		}
	};

	const handleBlur = (element: HTMLInputElement) => {
		if (type === 'date') {
			// validating date input
			if (!element.value) {
				element.style.borderColor = '#EF5050';
			} else {
				element.style.borderColor = '#98E37E';
			}
		} else {
			if (isValidated) {
				element.style.borderColor = '#98E37E';
				succeedSignRef.current!.style.display = 'block';
			} else {
				element.style.borderColor = '#EF5050';
				failedSignRef.current!.style.display = 'block';
			}
		}
	};

	return (
		<StyledInputWrapper>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput
				placeholder={ph}
				type={type}
				onChange={(e) => handleChange(e.target.value)}
				onBlur={(e) => handleBlur(e.target)}
				inputType={type}
				onFocus={() => handleFocus()}
			/>
			<StyledCriteria>{criterias}</StyledCriteria>
			<StyledSucceedSign src={succeed} ref={succeedSignRef} />
			<StyledFailedSign src={failed} ref={failedSignRef} />
		</StyledInputWrapper>
	);
};

export default Input;
