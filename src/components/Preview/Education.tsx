import styled from 'styled-components';
import { StyledDate, StyledParagraph, StyledRole, StyledTitle } from './Reusable.styles';
import { useFormCtx } from '../../store/formContext';

const Education = () => {
	const { resumeData } = useFormCtx();
	return (
		<StyledEducationWrapper>
			<StyledTitle>განათლება</StyledTitle>
			{resumeData.educations.map((edu) => {
				return (
					<StyledEducation>
						<StyledRole>
							{edu.institute} {edu.degree && `, ${edu.degree}`}
						</StyledRole>
						<StyledDate>{edu.due_date}</StyledDate>
						<StyledParagraph>{edu.description}</StyledParagraph>
					</StyledEducation>
				);
			})}
		</StyledEducationWrapper>
	);
};

export default Education;

const StyledEducationWrapper = styled.div`
	padding-top: 24px;
`;
const StyledEducation = styled.div`
	padding-bottom: 32px;
`;
