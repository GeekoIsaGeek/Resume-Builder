import styled from 'styled-components';
import { StyledTitle, StyledRole, StyledDate, StyledParagraph } from './Reusable.styles';
import { useFormCtx } from '../../store/formContext';

const Experience = () => {
	const { resumeData } = useFormCtx();
	const isAnyInputFilled = () => {
		return Array.from(Object.values(resumeData.experiences[0])).some((value) => value !== '');
	};

	return (
		<StyledExperienceWrapper>
			{isAnyInputFilled() && <StyledTitle>გამოცდილება</StyledTitle>}
			{resumeData.experiences.map((experience, i) => {
				return (
					<StyledExperience key={i}>
						<StyledRole>
							{experience.position}
							{experience.employer && ','} {experience.employer}
						</StyledRole>
						<StyledDate>
							{experience.start_date} {experience.due_date && `- ${experience.due_date}`}
						</StyledDate>
						{experience.description && (
							<StyledParagraph needsBorder={true}>{experience.description}</StyledParagraph>
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
