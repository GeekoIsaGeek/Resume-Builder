import Input from '../Reusable/Input';
import Textarea from '../Reusable/Textarea';
import { GrDown } from 'react-icons/gr';
import { useEffect, useState } from 'react';
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
	const [degree, setDegree] = useState('სტუდენტი');

	useEffect(() => {
		const getDegrees = async () => {
			const resp = await fetch('https://resume.redberryinternship.ge/api/degrees');
			const data = await resp.json();
			console.log(data);
			setDegrees(data);
		};
		getDegrees();
	}, []);

	return (
		<StyledForm>
			<Input label='სასწავლებელი' criterias='მინიმუმ 2 სიმბოლო' ph='სასწავლებელი' type='text' />
			<StyledDegreeAndDateWrapper>
				<StyledSelectWrapper>
					<h3>ხარისხი</h3>
					<StyledSelect onClick={() => setShowDropDown((prev) => !prev)}>
						{degree}
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
