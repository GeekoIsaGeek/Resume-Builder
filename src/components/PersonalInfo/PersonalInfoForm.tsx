import React, { useRef } from 'react';
import { StyledForm, StyledInputGroup, StyledUploader } from './PersonalInfo.styles';
import Input from '../Reusable/Input';
import Textarea from '../Reusable/Textarea';
import { ValidateName, ValidateEmail, ValidateNumber } from '../../Validators';
import { useFormCtx } from '../../store/formContext';

const PersonalInfoForm = () => {
	const { setResumeData } = useFormCtx();
	const uploadRef = useRef<HTMLInputElement>(null);

	const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
			const url = URL.createObjectURL(file);
			setResumeData((prev) => {
				return { ...prev, image: { valid: true, value: url } };
			});
		} else {
			setResumeData((prev) => {
				return { ...prev, image: { ...prev.image, valid: false } };
			});
		}
	};

	return (
		<StyledForm>
			<StyledInputGroup>
				<Input
					label='სახელი'
					ph='თქვენი სახელი'
					criterias='მინიმუმ 2 ასო, ქართული ასოები'
					type='text'
					validate={ValidateName}
					setter={(value: string, isValid: boolean) =>
						setResumeData((prev) => {
							return { ...prev, name: { valid: isValid, value } };
						})
					}
				/>
				<Input
					label='გვარი'
					ph='თქვენი გვარი'
					criterias='მინიმუმ 2 ასო, ქართული ასოები'
					type='text'
					validate={ValidateName}
					setter={(value: string, isValid: boolean) =>
						setResumeData((prev) => {
							return { ...prev, surname: { valid: isValid, value } };
						})
					}
				/>
			</StyledInputGroup>
			<StyledUploader>
				<input type='file' accept='.png, .jpg,.jpeg' onChange={(e) => imgHandler(e)} ref={uploadRef} />
				<span>პირადი ფოტოს ატვირთვა</span>
				<button
					onClick={(e) => {
						e.preventDefault();
						uploadRef.current?.click();
					}}
				>
					ატვირთვა
				</button>
			</StyledUploader>
			<Textarea
				label='ჩემ შესახებ (არასავალდებულო)'
				ph='ზოგადი ინფო შენ შესახებ'
				setter={(value: string, isValid: boolean) =>
					setResumeData((prev) => {
						return { ...prev, about_me: { valid: isValid, value } };
					})
				}
			/>
			<Input
				label='ელ.ფოსტა'
				ph='თქვენი ელ.ფოსტა'
				criterias='უნდა მთავრდებოდეს @redberry.ge-ით'
				type='email'
				validate={ValidateEmail}
				setter={(value: string, isValid: boolean) =>
					setResumeData((prev) => {
						return { ...prev, email: { valid: isValid, value } };
					})
				}
			/>
			<Input
				label='მობილურის ნომერი'
				ph='თქვენი მობილურის ნომერი'
				criterias='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
				type='text'
				validate={ValidateNumber}
				setter={(value: string, isValid: boolean) =>
					setResumeData((prev) => {
						return { ...prev, phone_number: { valid: isValid, value } };
					})
				}
			/>
		</StyledForm>
	);
};

export default PersonalInfoForm;
