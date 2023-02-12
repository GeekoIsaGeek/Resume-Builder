import styled from 'styled-components';
import Preview from './Preview/Preview';
import initialResumeState from '../store/initialResumeState';
import { useEffect, useState } from 'react';
import { useFormCtx } from '../store/formContext';
import axios from 'axios';

const BuiltResume = () => {
	const [data, setData] = useState(initialResumeState);
	const { resumeData, degrees } = useFormCtx();

	const educations = resumeData.educations.map((edu) => {
		return {
			degree_id: Array.from(degrees.map((degree) => degree.title)).indexOf(edu.degree.value),
			institute: edu.institute.value,
			degree: edu.degree.value,
			due_date: edu.due_date.value.replaceAll('/', '-'),
			description: edu.description.value,
		};
	});

	const experiences = resumeData.experiences.map((exp) => {
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

	const getData = async () => {
		try {
			const blobRes = await fetch(resumeData.image.value);
			const blob = await blobRes.blob();
			formData.append('image', blob);

			const res = await axios.post('https://resume.redberryinternship.ge/api/cvs', formData);
			console.log(res.data);

			setData(res.data);
		} catch (err) {
			// @ts-ignore
			console.log(err.message);
		}
	};
	getData();

	return (
		<StyledResume>
			<Preview data={data} style={{ border: '0.8px solid #000000', margin: '54px 0' }} />
		</StyledResume>
	);
};

export default BuiltResume;

const StyledResume = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;
