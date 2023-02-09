import Preview from '../Preview/Preview';
import FormWrapper from '../Reusable/FormWrapper';
import styled from 'styled-components';
import NavigationBtns from '../Reusable/NavigationBtns';
import FormInnerWrapper from '../Reusable/FormInnerWrapper';
import ExperienceForm from './ExperienceForm';
import AddMoreBtn from '../Reusable/AddMoreBtn';
import { useFormCtx } from '../../store/formContext';
import initialResumeState from '../../store/initialResumeState';
import ValidationError from '../Reusable/ValidationError';

const Experience = () => {
	const { setResumeData, resumeData, validationFailed } = useFormCtx();
	return (
		<StyledWrapper>
			<FormWrapper heading='გამოცდილება' page={2}>
				<FormInnerWrapper>
					{resumeData.experiences.map((experienceObj, i) => {
						return <ExperienceForm key={i} data={experienceObj} idx={i} />;
					})}
					<AddMoreBtn
						value='მეტი გამოცდილების დამატება'
						onClickHandler={() =>
							setResumeData((prev) => {
								return { ...prev, experiences: [...prev.experiences, initialResumeState.experiences[0]] };
							})
						}
					/>
					{validationFailed && <ValidationError />}
					<NavigationBtns />
				</FormInnerWrapper>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};

export default Experience;

const StyledWrapper = styled.div`
	display: flex;
`;
