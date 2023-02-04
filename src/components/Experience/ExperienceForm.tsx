import styled from 'styled-components';
import Input from '../Reusable/Input';
import Textarea from '../Reusable/Textarea';

const ExperienceForm = () => {
	return (
		<StyledForm>
			<Input label='თანამდებობა' ph='დეველოპერი, დიზაინერი, ა.შ' criterias='მინიმუმ 2 სიმბოლო' type='text' />
			<Input label='დამსაქმებელი' ph='დამსაქმებელი' criterias='მინიმუმ 2 სიმბოლო' type='text' />
			<StyledDateInputGroup>
				<Input label='დაწყების რიცხვი' type='date' />
				<Input label='დამთავრების რიცხვი' type='date' />
			</StyledDateInputGroup>
			<Textarea label='აღწერა' ph='როლი თანამდებობაზე და ზოგადი აღწერა' />
			<div
				style={{
					width: '100%',
					height: '1px',
					background: ' #C1C1C1',
					marginTop: '28px',
					marginBottom: '45px',
				}}
			></div>
		</StyledForm>
	);
};

export default ExperienceForm;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;
`;
const StyledDateInputGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
