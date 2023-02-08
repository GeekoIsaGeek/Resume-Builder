import styled from 'styled-components';
import Input from '../Reusable/Input';
import Textarea from '../Reusable/Textarea';
import { Experience } from '../../store/FormContext-Types';
import { useFormCtx } from '../../store/formContext';
import { StyledSeparatorLine } from '../Preview/Reusable.styles';

const ExperienceForm = ({ data, idx }: { data: Experience; idx: number }) => {
	const { setResumeData, resumeData } = useFormCtx();

	const updateExperiencesState = (value: string, targetProperty: string) => {
		const experiences = resumeData.experiences.map((exp, i) =>
			i === idx ? { ...exp, [targetProperty]: value } : exp
		);
		setResumeData((prev) => {
			return { ...prev, experiences };
		});
	};
	return (
		<StyledForm>
			<Input
				label='თანამდებობა'
				ph='დეველოპერი, დიზაინერი, ა.შ'
				criterias='მინიმუმ 2 სიმბოლო'
				type='text'
				validate={(value: string) => value.trim().length >= 2}
				setter={(value: string) => updateExperiencesState(value, 'position')}
			/>
			<Input
				label='დამსაქმებელი'
				ph='დამსაქმებელი'
				criterias='მინიმუმ 2 სიმბოლო'
				type='text'
				validate={(value: string) => value.trim().length >= 2}
				setter={(value: string) => updateExperiencesState(value, 'employer')}
			/>
			<StyledDateInputGroup>
				<Input
					label='დაწყების რიცხვი'
					type='date'
					validate={(value) => !!value}
					setter={(value: string) => updateExperiencesState(value, 'start_date')}
				/>
				<Input
					label='დამთავრების რიცხვი'
					type='date'
					validate={(value) => !!value}
					setter={(value: string) => updateExperiencesState(value, 'due_date')}
				/>
			</StyledDateInputGroup>
			<Textarea
				label='აღწერა'
				ph='როლი თანამდებობაზე და ზოგადი აღწერა'
				setter={(value: string) => updateExperiencesState(value, 'description')}
			/>
			<StyledSeparatorLine />
		</StyledForm>
	);
};

export default ExperienceForm;
export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;
`;
export const StyledDateInputGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
