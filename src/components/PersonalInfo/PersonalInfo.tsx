import Preview from '../Preview/Preview';
import FormWrapper from '../Reusable/FormWrapper';
import NavigationBtns from '../Reusable/NavigationBtns';
import FormInnerWrapper from '../Reusable/FormInnerWrapper';
import { StyledWrapper } from './PersonalInfo.styles';
import PersonalInfoForm from './PersonalInfoForm';

const PersonalInfo = () => {
	return (
		<StyledWrapper>
			<FormWrapper heading='პირადი ინფო' page={1}>
				<FormInnerWrapper>
					<PersonalInfoForm />
					<NavigationBtns />
				</FormInnerWrapper>
			</FormWrapper>
			<Preview />
		</StyledWrapper>
	);
};

export default PersonalInfo;
