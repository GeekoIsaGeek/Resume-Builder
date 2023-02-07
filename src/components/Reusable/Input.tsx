import succeed from '../../assets/images/Succeed.svg';
import failed from '../../assets/images/Failed.svg';
import { useRef } from 'react';
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
	setter: (value: string) => void;
}

const Input = ({ label, ph, criterias, type, validate, setter }: Props) => {
	const succeedSignRef = useRef<HTMLImageElement>(null);
	const failedSignRef = useRef<HTMLImageElement>(null);

	const handleBlur = (element: HTMLInputElement) => {
		if (type === 'date') {
			if (!element.value) {
				element.style.borderColor = '#EF5050';
			}
		}
	};

	const handleChange = (element: HTMLInputElement) => {
		const value = element.value;
		const validated = validate(value);

		succeedSignRef.current!.style.display = 'none';
		failedSignRef.current!.style.display = 'none';

		setter(value);
		if (validated) {
			element.style.borderColor = '#98E37E';
			if (type !== 'date') succeedSignRef.current!.style.display = 'block';
		} else {
			element.style.borderColor = '#EF5050';
			if (type !== 'date') failedSignRef.current!.style.display = 'block';
		}
	};
	return (
		<StyledInputWrapper>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput
				placeholder={ph}
				type={type}
				onChange={(e) => handleChange(e.target)}
				onBlur={(e) => handleBlur(e.target)}
				inputType={type}
			/>
			<StyledCriteria>{criterias}</StyledCriteria>
			<StyledSucceedSign src={succeed} ref={succeedSignRef} />
			<StyledFailedSign src={failed} ref={failedSignRef} />
		</StyledInputWrapper>
	);
};

export default Input;
