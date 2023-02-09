import Preview from '../Preview/Preview';
import FormWrapper from '../Reusable/FormWrapper';
import styled from 'styled-components';
import NavigationBtns from '../Reusable/NavigationBtns';
import FormInnerWrapper from '../Reusable/FormInnerWrapper';
import EducationForm from './EducationForm';
import AddMoreBtn from '../Reusable/AddMoreBtn';
import { useFormCtx } from '../../store/formContext';
import initialResumeState from '../../store/initialResumeState';
import ValidationError from '../Reusable/ValidationError';

const Education = () => {
	const { setResumeData, resumeData, validationFailed } = useFormCtx();

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
								return { ...prev, educations: [...prev.educations, initialResumeState.educations[0]] };
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
export default Education;

const StyledWrapper = styled.div`
	display: flex;
`;
