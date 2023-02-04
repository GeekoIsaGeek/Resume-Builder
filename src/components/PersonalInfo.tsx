import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';
import Input from './Reusable/Input';
import Textarea from './Reusable/Textarea';
import NavigationBtns from './Reusable/NavigationBtns';
import FormInnerWrapper from './Reusable/FormInnerWrapper';

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

const StyledWrapper = styled.div`
	display: flex;
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;
`;
const StyledInputGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const StyledUploader = styled.div`
	overflow: hidden;
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	margin: 20px 0;
	button {
		margin-left: 20px;
		background: #0e80bf;
		color: white;
		border: none;
		outline: unset;
		font-weight: 400;
		font-size: 14px;
		padding: 5px 20px;
		border-radius: 4px;
		cursor: pointer;
		transition: background 0.2s linear;
		&:hover {
			background: #1d9bdf;
		}
	}
	span {
		width: 232px;
		height: 22px;
		font-size: 18px;
		font-weight: 500;
		color: ${(props) => props.theme.colors.offBlack};
	}
	input {
		width: 232px;
		font-size: 30px;
		position: absolute;
		height: inherit;
		top: 0;
		left: 0;
		opacity: 0;
	}
`;
