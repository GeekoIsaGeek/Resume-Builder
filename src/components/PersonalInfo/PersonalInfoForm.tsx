import React from 'react';
import { StyledForm, StyledInputGroup, StyledUploader } from './PersonalInfo.styles';
import Input from '../Reusable/Input';
import Textarea from '../Reusable/Textarea';
import { ValidateName, ValidateEmail, ValidateNumber } from '../../Validators';
import { useFormCtx } from '../../store/formContext';

const PersonalInfoForm = () => {
	const { setResumeData, resumeData } = useFormCtx();
	console.log(resumeData);

	const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
		}
	};
	const handleUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
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
					setter={(value) =>
						setResumeData((prev) => {
							return { ...prev, name: value };
						})
					}
				/>
				<Input
					label='გვარი'
					ph='თქვენი გვარი'
					criterias='მინიმუმ 2 ასო, ქართული ასოები'
					type='text'
					validate={ValidateName}
					setter={(value) =>
						setResumeData((prev) => {
							return { ...prev, surname: value };
						})
					}
				/>
			</StyledInputGroup>
			<StyledUploader>
				<input type='file' accept='.png, .jpg,.jpeg' onChange={(e) => imgHandler(e)} />
				<span>პირადი ფოტოს ატვირთვა</span>
				<button onClick={(e) => handleUpload(e)}>ატვირთვა</button>
			</StyledUploader>
			<Textarea
				label='ჩემ შესახებ (არასავალდებულო)'
				ph='ზოგადი ინფო შენ შესახებ'
				setter={(value) =>
					setResumeData((prev) => {
						return { ...prev, about_me: value };
					})
				}
			/>
			<Input
				label='ელ.ფოსტა'
				ph='თქვენი ელ.ფოსტა'
				criterias='უნდა მთავრდებოდეს @redberry.ge-ით'
				type='email'
				validate={ValidateEmail}
				setter={(value) =>
					setResumeData((prev) => {
						return { ...prev, email: value };
					})
				}
			/>
			<Input
				label='მობილურის ნომერი'
				ph='თქვენი მობილურის ნომერი (+995 5.. .. .. ..)'
				criterias='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
				type='text'
				validate={ValidateNumber}
				setter={(value) =>
					setResumeData((prev) => {
						return { ...prev, phone_number: value };
					})
				}
			/>
		</StyledForm>
	);
};

export default PersonalInfoForm;
