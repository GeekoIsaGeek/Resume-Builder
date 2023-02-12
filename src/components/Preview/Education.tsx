import styled from 'styled-components';
import { StyledDate, StyledParagraph, StyledRole, StyledTitle } from './Reusable.styles';
import { Resume } from '../../store/FormContext-Types';
import { useFormCtx } from '../../store/formContext';

const Education = () => {
	const { resumeData: data } = useFormCtx();
	const isAnyInputFilled = () => {
		return Array.from(Object.values(data.educations[0])).some((prop) => prop.value !== '');
	};

	return (
		<StyledEducationWrapper>
			{isAnyInputFilled() && <StyledTitle>განათლება</StyledTitle>}
			{data.educations.map((edu, i) => {
				return (
					<StyledEducation key={i}>
						<StyledRole>
							{edu.institute.value} {edu.degree.value && `, ${edu.degree.value}`}
						</StyledRole>
						<StyledDate>{edu.due_date.value}</StyledDate>
						{edu.description.value && (
							<StyledParagraph needsBorder={i + 1 !== data.educations.length}>
								{edu.description.value}
							</StyledParagraph>
						)}
					</StyledEducation>
				);
			})}
		</StyledEducationWrapper>
	);
};

export default Education;

const StyledEducationWrapper = styled.div``;
const StyledEducation = styled.div`
	padding-bottom: 32px;
`;
