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

interface Degree {
	id: number;
	title: string;
}

const EducationForm = ({ data, idx }: { data: Education; idx: number }) => {
	const [showDropDown, setShowDropDown] = useState(false);
	const [degrees, setDegrees] = useState<Degree[]>([]);
	const [degree, setDegree] = useState<string | null>(null);
	const selectRef = useRef<HTMLDivElement>(null);
	const { setResumeData, resumeData } = useFormCtx();

	useEffect(() => {
		const getDegrees = async () => {
			const resp = await fetch('https://resume.redberryinternship.ge/api/degrees');
			const data = await resp.json();
			setDegrees(data);
		};
		getDegrees();
	}, []);

	const handleClick = (element: HTMLDivElement) => {
		setShowDropDown((prev) => !prev);
		if (!showDropDown) {
			if (!degree) element.style.borderColor = '#EF5050';
		}
	};
	useEffect(() => {
		if (degree) {
			updateEducationsState(degree, 'degree');
			selectRef.current!.style.borderColor = '#98E37E';
		}
	}, [degree]);

	const updateEducationsState = (value: string, targetProperty: string) => {
		const educations = resumeData.educations.map((edu, i) => (i === idx ? { ...edu, [targetProperty]: value } : edu));
		setResumeData((prev) => {
			return { ...prev, educations };
		});
	};

	return (
		<StyledForm>
			<Input
				label='სასწავლებელი'
				criterias='მინიმუმ 2 სიმბოლო'
				ph='სასწავლებელი'
				type='text'
				validate={(value: string) => value.trim().length >= 2}
				setter={(value: string) => updateEducationsState(value, 'institute')}
			/>
			<StyledDegreeAndDateWrapper>
				<StyledSelectWrapper>
					<h3>ხარისხი</h3>
					<StyledSelect onClick={(e) => handleClick(e.target as HTMLDivElement)} ref={selectRef}>
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
					setter={(value: string) => updateEducationsState(value, 'due_date')}
				/>
			</StyledDegreeAndDateWrapper>
			<Textarea
				label='აღწერა'
				ph='განათლების აღწერა'
				setter={(value: string) => updateEducationsState(value, 'description')}
			/>
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
