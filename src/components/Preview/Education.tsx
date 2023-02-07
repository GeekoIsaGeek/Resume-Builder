import styled from 'styled-components';
import { StyledDate, StyledParagraph, StyledRole, StyledTitle } from './Reusable.styles';
import { useFormCtx } from '../../store/formContext';

const Education = () => {
	const { resumeData } = useFormCtx();
	const isAnyInputFilled = () => {
		return Array.from(Object.values(resumeData.educations[0])).some((value) => value !== '');
	};

	return (
		<StyledEducationWrapper>
			{isAnyInputFilled() && <StyledTitle>განათლება</StyledTitle>}
			{resumeData.educations.map((edu, i) => {
				return (
					<StyledEducation>
						<StyledRole>
							{edu.institute} {edu.degree && `, ${edu.degree}`}
						</StyledRole>
						<StyledDate>{edu.due_date}</StyledDate>
						{edu.description && (
							<StyledParagraph needsBorder={++i === resumeData.educations.length ? false : true}>
								{edu.description}
							</StyledParagraph>
						)}
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
