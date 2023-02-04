import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import Input from './Reusable/Input';
import Textarea from './Reusable/Textarea';
import NavigationBtns from './Reusable/NavigationBtns';
import FormInnerWrapper from './Reusable/FormInnerWrapper';
import { StyledForm, StyledInputGroup, StyledUploader, StyledWrapper } from './PersonalInfo.styles';

const PersonalInfo = () => {
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
		<StyledWrapper>
			<FormWrapper heading='პირადი ინფო' page={1}>
				<FormInnerWrapper>
					<StyledForm>
						<StyledInputGroup>
							<Input label='სახელი' ph='თქვენი სახელი' criterias='მინიმუმ 2 ასო, ქართული ასოები' type='text' />
							<Input label='გვარი' ph='თქვენი გვარი' criterias='მინიმუმ 2 ასო, ქართული ასოები' type='text' />
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
						/>
						<Input
							label='მობილურის ნომერი'
							ph='თქვენი მობილურის ნომერი'
							criterias='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
							type='text'
						/>
					</StyledForm>
					<NavigationBtns />
				</FormInnerWrapper>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};

export default PersonalInfo;
