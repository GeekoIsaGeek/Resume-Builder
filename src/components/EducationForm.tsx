import styled from 'styled-components';
import Input from './Reusable/Input';
import Textarea from './Reusable/Textarea';
import { GrDown } from 'react-icons/gr';
import { useEffect, useState } from 'react';

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

	h3 {
		margin-bottom: 4px;
		font-weight: 500;
		font-size: 16px;
	}
`;

const StyledSelect = styled.div`
	border-radius: 4px;
	font-size: 16px;
	padding: 14px 16px;
	border: 1px solid ${(props) => props.theme.colors.inputBorder};
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	svg {
		font-size: 14px;
	}
	cursor: pointer;
	user-select: none;
`;

const StyledOptions = styled.ul`
	position: absolute;
	top: 103%;
	left: 0;
	width: 100%;
	background-color: white;
	box-shadow: 0px 16px 28px 0px rgba(0, 0, 0, 0.24);
	border-radius: 4px;
	li {
		width: 100%;
		padding: 10px 16px;
		font-size: 16px;
		transition: background 0.2s ease-out;
		&:hover {
			background: rgba(195, 220, 238, 1);
		}
	}
`;
