import styled from 'styled-components';
import { StyledTitle, StyledRole, StyledDate, StyledParagraph } from './Reusable.styles';
import { Experience as ExperienceType } from '../../store/FormContext-Types';
import { Resume } from '../../store/FormContext-Types';
import { useFormCtx } from '../../store/formContext';

const Experience = () => {
	const { resumeData: data } = useFormCtx();
	const isAnyInputFilled = (obj: ExperienceType) => {
		return Array.from(Object.values(obj)).some((prop) => prop.value !== '');
	};

	return (
		<StyledExperienceWrapper>
			{isAnyInputFilled(data.experiences[0]) && <StyledTitle>გამოცდილება</StyledTitle>}
			{data.experiences.map((experience, i) => {
				return (
					<StyledExperience key={i} style={{ paddingBottom: `${isAnyInputFilled(experience) ? '24px' : 0}` }}>
						<StyledRole>
							{experience.position.value}
							{experience.employer.value && ','} {experience.employer.value}
						</StyledRole>
						<StyledDate>
							{experience.start_date.value} {experience.due_date.value && `- ${experience.due_date.value}`}
						</StyledDate>
						{experience.description.value && (
							<StyledParagraph needsBorder={true}>{experience.description.value}</StyledParagraph>
						)}
					</StyledExperience>
				);
			})}
		</StyledExperienceWrapper>
	);
};

export default Experience;

const StyledExperienceWrapper = styled.div`
	padding-top: 24px;
`;

const StyledExperience = styled.div`
	padding-bottom: 24px;
`;
