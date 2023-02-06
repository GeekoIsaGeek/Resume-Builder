import Preview from '../Preview/Preview';
import FormWrapper from '../Reusable/FormWrapper';
import styled from 'styled-components';
import NavigationBtns from '../Reusable/NavigationBtns';
import FormInnerWrapper from '../Reusable/FormInnerWrapper';
import EducationForm from './EducationForm';
import AddMoreBtn from '../Reusable/AddMoreBtn';
import { resume, useFormCtx } from '../../store/formContext';

const Education = () => {
	const { setResumeData, resumeData } = useFormCtx();

	return (
		<StyledWrapper>
			<FormWrapper heading='განათლება' page={3}>
				<FormInnerWrapper>
					{resumeData.educations.map((eduObj, i) => {
						return <EducationForm key={i} data={eduObj} idx={i} />;
					})}
					<AddMoreBtn
						value='სხვა სასწავლებლის დამატება'
						onClickHandler={() =>
							setResumeData((prev) => {
								//adding one more education object (which is getting picked out of the initial state of formContext)
								return { ...prev, educations: [...prev.educations, resume.educations[0]] };
							})
						}
					/>
					<NavigationBtns />
				</FormInnerWrapper>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};
export default Education;

const StyledWrapper = styled.div`
	display: flex;
`;
