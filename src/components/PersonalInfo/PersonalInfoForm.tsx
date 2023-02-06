import React from 'react';
import { StyledForm, StyledInputGroup, StyledUploader } from './PersonalInfo.styles';
import Input from '../Reusable/Input';
import Textarea from '../Reusable/Textarea';
import { ValidateName, ValidateEmail, ValidateNumber } from '../../Validators';

const PersonalInfoForm = () => {
	const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
			console.log(file);
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
				/>
				<Input
					label='გვარი'
					ph='თქვენი გვარი'
					criterias='მინიმუმ 2 ასო, ქართული ასოები'
					type='text'
					validate={ValidateName}
				/>
			</StyledInputGroup>
			<StyledUploader>
				<input type='file' accept='.png, .jpg,.jpeg' onChange={(e) => imgHandler(e)} />
				<span>პირადი ფოტოს ატვირთვა</span>
				<button onClick={(e) => handleUpload(e)}>ატვირთვა</button>
			</StyledUploader>
			<Textarea label='ჩემ შესახებ (არასავალდებულო)' ph='ზოგადი ინფო შენ შესახებ' />
			<Input
				label='ელ.ფოსტა'
				ph='თქვენი ელ.ფოსტა'
				criterias='უნდა მთავრდებოდეს @redberry.ge-ით'
				type='email'
				validate={ValidateEmail}
			/>
			<Input
				label='მობილურის ნომერი'
				ph='თქვენი მობილურის ნომერი'
				criterias='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
				type='text'
				validate={ValidateNumber}
			/>
		</StyledForm>
	);
};

export default PersonalInfoForm;
