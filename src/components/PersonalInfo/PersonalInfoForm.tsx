import React, { useRef, useState } from 'react';
import { StyledForm, StyledInputGroup, StyledUploader } from './PersonalInfo.styles';
import Input from '../Reusable/Input';
import Textarea from '../Reusable/Textarea';
import { ValidateName, ValidateEmail, ValidateNumber } from '../../Validators';
import { useFormCtx } from '../../store/formContext';

const PersonalInfoForm = () => {
	const { setResumeData, resumeData } = useFormCtx();
	const uploadRef = useRef<HTMLInputElement>(null);

	const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]?.size < 5000000) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				// @ts-ignore
				setResumeData((prev) => {
					return { ...prev, image: { valid: true, value: reader.result } };
				});
			};
			reader.readAsDataURL(file);
		} else {
			setResumeData((prev) => {
				return { ...prev, image: { ...prev.image, valid: false } };
			});
			window.alert('აუცილებელია აირჩიოთ 5მბ-ზე მცირე ზომის სურათი');
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
					value={resumeData.name.value}
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
					value={resumeData.surname.value}
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
				value={resumeData.about_me.value}
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
				value={resumeData.email.value}
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
				value={resumeData.phone_number.value}
			/>
		</StyledForm>
	);
};

export default PersonalInfoForm;
