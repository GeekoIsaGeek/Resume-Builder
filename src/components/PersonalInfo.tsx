import Preview from './Preview';
import FormWrapper from './Reusable/FormWrapper';
import styled from 'styled-components';
import Input from './Reusable/Input';
import Textarea from './Reusable/Textarea';
import { useFormCtx } from '../store/formContext';
import NavigationBtns from './Reusable/NavigationBtns';

const PersonalInfo = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='პირადი ინფო' page={1}>
				<StyledFormInnerWrapper>
					<StyledForm>
						<StyledInputGroup>
							<Input label='სახელი' ph='თქვენი სახელი' criterias='მინიმუმ 2 ასო, ქართული ასოები' type='text' />
							<Input label='გვარი' ph='თქვენი გვარი' criterias='მინიმუმ 2 ასო, ქართული ასოები' type='text' />
						</StyledInputGroup>
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
				</StyledFormInnerWrapper>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};

export default PersonalInfo;

const StyledWrapper = styled.div`
	display: flex;
`;
const StyledFormInnerWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
