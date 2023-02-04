import styled from 'styled-components';
import Input from './Reusable/Input';
import Textarea from './Reusable/Textarea';

const EducationForm = () => {
	return (
		<StyledForm>
			<Input label='სასწავლებელი' criterias='მინიმუმ 2 სიმბოლო' ph='სასწავლებელი' type='text' />
			<StyledDegreeAndDateWrapper>
				<StyledSelectWrapper>
					<h3>ხარისხი</h3>
					<select>
						<option value='' selected>
							სტუდენტი
						</option>
					</select>
				</StyledSelectWrapper>
				<Input label='დამთავრების რიცხვი' type='date' />
			</StyledDegreeAndDateWrapper>
			<Textarea label='აღწერა' ph='განათლების აღწერა' />
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

export default EducationForm;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
const StyledDegreeAndDateWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 56px;
`;
const StyledSelectWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	select {
		border-radius: 4px;
		font-size: 16px;
		padding: 14px 16px;
		outline: none;
		border: 1px solid ${(props) => props.theme.colors.inputBorder};
	}
	h3 {
		margin-bottom: 4px;
		font-weight: 500;
		font-size: 16px;
	}
`;
