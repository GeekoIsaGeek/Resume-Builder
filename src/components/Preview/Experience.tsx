import styled from 'styled-components';
import { StyledTitle, StyledRole, StyledDate, StyledParagraph } from './Reusable.styles';
import { useFormCtx } from '../../store/formContext';

const Experience = () => {
	const { resumeData } = useFormCtx();

	return (
		<StyledExperienceWrapper>
			<StyledTitle>გამოცდილება</StyledTitle>
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
						<StyledParagraph>{experience.description}</StyledParagraph>
					</StyledExperience>
				);
			})}
		</StyledExperienceWrapper>
	);
};

export default Experience;

const StyledExperienceWrapper = styled.div`
	padding-top: 24px;
	border-bottom: 1px solid #c8c8c8;
`;
const StyledExperience = styled.div`
	padding-bottom: 32px;
`;
