import Preview from '../Preview/Preview';
import FormWrapper from '../Reusable/FormWrapper';
import NavigationBtns from '../Reusable/NavigationBtns';
import FormInnerWrapper from '../Reusable/FormInnerWrapper';
import { StyledWrapper } from './PersonalInfo.styles';
import PersonalInfoForm from './PersonalInfoForm';
import ValidationError from '../Reusable/ValidationError';
import { useFormCtx } from '../../store/formContext';

const PersonalInfo = () => {
	const { validationFailed, resumeData } = useFormCtx();
	return (
		<StyledWrapper>
			<FormWrapper heading='პირადი ინფო' page={1}>
				<FormInnerWrapper>
					<PersonalInfoForm />
					{validationFailed && <ValidationError />}
					<NavigationBtns />
				</FormInnerWrapper>
			</FormWrapper>
			<Preview data={resumeData} />
		</StyledWrapper>
	);
};

export default PersonalInfo;
