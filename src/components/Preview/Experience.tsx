import styled from 'styled-components';
import { StyledTitle, StyledRole, StyledDate, StyledParagraph } from './Reusable.styles';

const Experience = () => {
	return (
		<StyledExperienceWrapper>
			<StyledTitle>გამოცდილება</StyledTitle>
			<StyledExperience>
				<StyledRole>React Native Developer, Microsoft</StyledRole>
				<StyledDate>2020-09-23 - 2020-09-23</StyledDate>
				<StyledParagraph>
					Experienced Javascript Native Developer with 5 years in the industry. proficient withreact. Used
					problem-solving aptitude to encahge application performance by 14%.created data visualisation tools and
					integrated designs.
				</StyledParagraph>
			</StyledExperience>
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
