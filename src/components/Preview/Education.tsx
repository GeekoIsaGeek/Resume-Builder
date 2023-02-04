import styled from 'styled-components';
import { StyledDate, StyledParagraph, StyledRole, StyledTitle } from './Reusable.styles';

const Education = () => {
	return (
		<StyledEducationWrapper>
			<StyledTitle>განათლება</StyledTitle>
			<StyledEducation>
				<StyledRole>წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი</StyledRole>
				<StyledDate>2020-09-09</StyledDate>
				<StyledParagraph>
					ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის,
					ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო.
					აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
				</StyledParagraph>
			</StyledEducation>
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
