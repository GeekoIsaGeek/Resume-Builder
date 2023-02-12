import succeed from '../../assets/images/Succeed.svg';
import failed from '../../assets/images/Failed.svg';
import { useRef, useEffect } from 'react';
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
	value: string;
}

const Input = ({ label, ph, criterias, type, validate, setter, value }: Props) => {
	const succeedSignRef = useRef<HTMLImageElement>(null);
	const failedSignRef = useRef<HTMLImageElement>(null);

	const handleFocus = () => {
		succeedSignRef.current!.style.display = 'none';
		failedSignRef.current!.style.display = 'none';
	};

	const handleChange = (value: string) => {
		const isValid = validate(value) as boolean;
		if (type === 'date') {
			setter(value, value ? true : false);
		} else {
			setter(value, isValid);
		}
	};

	const handleBlur = (element: HTMLInputElement) => {
		let isValidated = validate(element.value) as boolean;

		if (label === 'მობილურის ნომერი') {
			const init = value.replaceAll(' ', '');
			let val: string = '';
			for (let i = 0; i < init.length; i++) {
				if (i === 3 || i === 6 || i === 8 || i === 10) {
					val += init[i] + ' ';
				} else {
					val += init[i];
				}
			}
			setter(val, validate(val) as boolean);
			isValidated = validate(val) as boolean;
		}

		if (type === 'date') {
			// validating date inputs
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
				value={value}
			/>
			<StyledCriteria>{criterias}</StyledCriteria>
			<StyledSucceedSign src={succeed} ref={succeedSignRef} />
			<StyledFailedSign src={failed} ref={failedSignRef} />
		</StyledInputWrapper>
	);
};

export default Input;
