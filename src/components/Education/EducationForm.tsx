import Input from '../Reusable/Input';
import Textarea from '../Reusable/Textarea';
import { GrDown } from 'react-icons/gr';
import { useEffect, useState, useRef } from 'react';
import {
	StyledDegreeAndDateWrapper,
	StyledForm,
	StyledOptions,
	StyledSelect,
	StyledSelectWrapper,
} from './Education.styles';
import { Education } from '../../store/FormContext-Types';
import { useFormCtx } from '../../store/formContext';
import { StyledSeparatorLine } from '../Preview/Reusable.styles';

const EducationForm = ({ data, idx }: { data: Education; idx: number }) => {
	const [showDropDown, setShowDropDown] = useState(false);
	const [degree, setDegree] = useState<string | null>(data.degree.value || null);
	const selectRef = useRef<HTMLDivElement>(null);
	const { setResumeData, resumeData, degrees, setDegrees } = useFormCtx();

	const handleClick = (element: HTMLDivElement) => {
		setShowDropDown((prev) => !prev);
		if (!showDropDown) {
			if (!degree) element.style.borderColor = '#EF5050';
		}
	};
	useEffect(() => {
		if (degree) {
			updateEducationsState(degree, 'degree', true);
			selectRef.current!.style.borderColor = '#98E37E';
		}
	}, [degree]);

	type TargetProperty = 'institute' | 'due_date' | 'description' | 'degree';

	const updateEducationsState = (value: string, targetProperty: TargetProperty, isValid: boolean) => {
		const educations = resumeData.educations.map((edu, i) =>
			i === idx ? { ...edu, [targetProperty]: { valid: isValid, value } } : edu
		);
		setResumeData((prev) => {
			return { ...prev, educations };
		});
	};
	useEffect(() => {
		const getDegrees = async () => {
			const resp = await fetch('https://resume.redberryinternship.ge/api/degrees');
			const data = await resp.json();
			setDegrees(data);
		};
		getDegrees();
	}, []);
	return (
		<StyledForm>
			<Input
				label='სასწავლებელი'
				criterias='მინიმუმ 2 სიმბოლო'
				ph='სასწავლებელი'
				type='text'
				validate={(value: string) => value.trim().length >= 2}
				setter={(value: string, isValid: boolean) => updateEducationsState(value, 'institute', isValid)}
				value={data.institute.value}
			/>
			<StyledDegreeAndDateWrapper>
				<StyledSelectWrapper>
					<h3>ხარისხი</h3>
					<StyledSelect onClick={(e) => handleClick(e.target as HTMLDivElement)} ref={selectRef} tabIndex={0}>
						{degree || 'აირჩიეთ ხარისხი'}
						<GrDown />
						{showDropDown && (
							<StyledOptions>
								{degrees.map((degree, i): React.ReactNode => {
									return (
										<li key={i} onClick={() => setDegree(degree.title)}>
											{degree.title}
										</li>
									);
								})}
							</StyledOptions>
						)}
					</StyledSelect>
				</StyledSelectWrapper>
				<Input
					label='დამთავრების რიცხვი'
					type='date'
					validate={(value) => !!value}
					setter={(value: string, isValid: boolean) => updateEducationsState(value, 'due_date', isValid)}
					value={data.due_date.value}
				/>
			</StyledDegreeAndDateWrapper>
			<Textarea
				label='აღწერა'
				ph='განათლების აღწერა'
				setter={(value: string, isValid: boolean) => updateEducationsState(value, 'description', isValid)}
				value={data.description.value}
			/>
			<StyledSeparatorLine />
		</StyledForm>
	);
};

export default EducationForm;
