import styled from 'styled-components';
import Input from '../Reusable/Input';
import Textarea from '../Reusable/Textarea';
import { Experience } from '../../store/FormContext-Types';
import { useFormCtx } from '../../store/formContext';
import { StyledSeparatorLine } from '../Preview/Reusable.styles';

const ExperienceForm = ({ data, idx }: { data: Experience; idx: number }) => {
	const { setResumeData, resumeData } = useFormCtx();

	type TargetProperty = 'position' | 'employer' | 'start_date' | 'due_date' | 'description';

	const updateExperiencesState = (value: string, targetProperty: TargetProperty, isValid: boolean) => {
		const experiences = resumeData.experiences.map((exp, i) =>
			i === idx ? { ...exp, [targetProperty]: { valid: isValid, value } } : exp
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
				setter={(value: string, isValid: boolean) => updateExperiencesState(value, 'position', isValid)}
				value={data.position.value}
			/>
			<Input
				label='დამსაქმებელი'
				ph='დამსაქმებელი'
				criterias='მინიმუმ 2 სიმბოლო'
				type='text'
				validate={(value: string) => value.trim().length >= 2}
				setter={(value: string, isValid: boolean) => updateExperiencesState(value, 'employer', isValid)}
				value={data.employer.value}
			/>
			<StyledDateInputGroup>
				<Input
					label='დაწყების რიცხვი'
					type='date'
					validate={(value) => !!value}
					setter={(value: string, isValid: boolean) => updateExperiencesState(value, 'start_date', isValid)}
					value={data.start_date.value}
				/>
				<Input
					label='დამთავრების რიცხვი'
					type='date'
					validate={(value) => !!value}
					setter={(value: string, isValid: boolean) => updateExperiencesState(value, 'due_date', isValid)}
					value={data.due_date.value}
				/>
			</StyledDateInputGroup>
			<Textarea
				label='აღწერა'
				ph='როლი თანამდებობაზე და ზოგადი აღწერა'
				setter={(value: string, isValid: boolean) => updateExperiencesState(value, 'description', isValid)}
				value={data.description.value}
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
