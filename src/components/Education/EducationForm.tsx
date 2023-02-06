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

interface Degree {
	id: number;
	title: string;
}

const EducationForm = () => {
	const [showDropDown, setShowDropDown] = useState(false);
	const [degrees, setDegrees] = useState<Degree[]>([]);
	const [degree, setDegree] = useState<string | null>(null);
	const selectRef = useRef<HTMLDivElement>(null);

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
		if (degree) selectRef.current!.style.borderColor = '#98E37E';
	}, [degree]);

	return (
		<StyledForm>
			<Input
				label='სასწავლებელი'
				criterias='მინიმუმ 2 სიმბოლო'
				ph='სასწავლებელი'
				type='text'
				validate={(value: string) => value.trim().length >= 2}
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
				<Input label='დამთავრების რიცხვი' type='date' validate={(value) => !!value} />
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
