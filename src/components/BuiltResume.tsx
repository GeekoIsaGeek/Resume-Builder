import styled from 'styled-components';
import Preview from './Preview/Preview';
import initialResumeState from '../store/initialResumeState';
import { useEffect, useState } from 'react';
import { useFormCtx } from '../store/formContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RestartBtn from './Reusable/RestartBtn';
import { IoIosClose } from 'react-icons/io';

const BuiltResume = () => {
	const [data, setData] = useState(initialResumeState);
	const { resumeData, degrees } = useFormCtx();
	const [showNotification, setShowNotification] = useState(false);
	const navigate = useNavigate();

	const educations = resumeData.educations
		.filter((edu) => {
			return Array.from(Object.values(edu)).every((prop) => prop.value !== '');
		})
		.map((edu) => {
			return {
				degree_id: Array.from(degrees.map((degree) => degree.title)).indexOf(edu.degree.value) + 1,
				institute: edu.institute.value,
				degree: edu.degree.value,
				due_date: edu.due_date.value.replaceAll('/', '-'),
				description: edu.description.value,
			};
		});

	const experiences = resumeData.experiences
		.filter((exp) => {
			return Array.from(Object.values(exp)).every((prop) => prop.value !== '');
		})
		.map((exp) => {
			return {
				position: exp.position.value,
				employer: exp.employer.value,
				start_date: exp.start_date.value.replaceAll('/', '-'),
				due_date: exp.due_date.value.replaceAll('/', '-'),
				description: exp.description.value,
			};
		});

	const formData = new FormData();
	formData.append('name', resumeData.name.value);
	formData.append('surname', resumeData.surname.value);
	formData.append('about_me', resumeData.about_me.value);
	formData.append('phone_number', resumeData.phone_number.value.replaceAll(' ', ''));
	formData.append('email', resumeData.email.value);

	for (let i in experiences) {
		formData.append(`experiences[${i}][position]`, experiences[i].position.toString());
		formData.append(`experiences[${i}][employer]`, experiences[i].employer.toString());
		formData.append(`experiences[${i}][start_date]`, experiences[i].start_date.toString());
		formData.append(`experiences[${i}][due_date]`, experiences[i].due_date.toString());
		formData.append(`experiences[${i}][description]`, experiences[i].description.toString());
	}

	for (let i in educations) {
		formData.append(`educations[${i}][institute]`, educations[i].institute.toString());
		formData.append(`educations[${i}][degree]`, educations[i].degree.toString());
		formData.append(`educations[${i}][degree_id]`, educations[i].degree_id.toString());
		formData.append(`educations[${i}][due_date]`, educations[i].due_date.toString());
		formData.append(`educations[${i}][description]`, educations[i].description.toString());
	}
	useEffect(() => {
		const getData = async () => {
			try {
				const blobRes = await fetch(resumeData.image.value);
				const blob = await blobRes.blob();
				formData.append('image', blob);
				const baseUrl = 'https://resume.redberryinternship.ge';

				const res = await axios.post(`${baseUrl}/api/cvs`, formData);
				setData({ ...res.data, image: `${baseUrl}${res.data.image}` });
				setShowNotification(true);
			} catch (err) {
				// @ts-ignore
				console.log(err.message);
				setShowNotification(false);
				alert('დაფიქსირდა შეცდომა, სცადეთ ხელახლა!');
				console.clear();
				navigate('/resume/personal-info');
			}
		};
		getData();
	}, []);

	return (
		<StyledResume>
			<RestartBtn style={{ background: '#F9F9F9' }} />
			<Preview data={data} style={{ border: '0.8px solid #000000' }} />
			{showNotification && (
				<StyledNotification>
					<p>რეზიუმე წარმატებით გაიგზავნა 🎉</p> <IoIosClose onClick={() => setShowNotification(false)} />
				</StyledNotification>
			)}
		</StyledResume>
	);
};

export default BuiltResume;

const StyledResume = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	gap: 52px;
	padding: 54px 0;
`;
const StyledNotification = styled.div`
	font-size: 28px;
	font-weight: 600;
	padding: 40px 30px;
	box-shadow: 0px 4px 28px 0px #00000040;
	color: ${(props) => props.theme.colors.offBlack};
	border: 1px solid #e4e4e4;
	height: max-content;
	border-radius: 8px;
	position: relative;
	p {
		width: 364px;
	}
	svg {
		position: absolute;
		top: 17px;
		right: 11px;
		font-size: 36px;
		cursor: pointer;
		transition: color 0.2s ease-out;
		&:hover {
			color: gray;
		}
	}
`;
