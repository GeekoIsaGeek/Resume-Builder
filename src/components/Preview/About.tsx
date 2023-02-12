import { Fragment } from 'react';
import { MdAlternateEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { StyledParagraph, StyledTitle } from './Reusable.styles';
import {
	StyledAbout,
	StyledAboutWrapper,
	StyledContactInfo,
	StyledEmail,
	StyledName,
	StyledPhoneNum,
	StyledPhoto,
} from './About.styles';
import { useFormCtx } from '../../store/formContext';

const About = () => {
	const { resumeData } = useFormCtx();
	const { name, surname, email, phone_number, about_me, image } = resumeData;

	const isAnyInputFilled = () => {
		return [name, surname, email, phone_number, about_me, image].some((prop) => prop.value !== '');
	};

	return (
		<StyledAboutWrapper needsBorder={isAnyInputFilled()}>
			<StyledAbout>
				<StyledName>
					{name.value} {surname.value}
				</StyledName>
				<StyledContactInfo>
					{email.value && (
						<StyledEmail>
							<MdAlternateEmail />
							<p>{email.value}</p>
						</StyledEmail>
					)}
					{phone_number.value && (
						<StyledPhoneNum>
							<FaPhoneAlt />
							<p>{phone_number.value}</p>
						</StyledPhoneNum>
					)}
				</StyledContactInfo>
				{about_me.value && (
					<Fragment>
						<StyledTitle>ჩემ შესახებ</StyledTitle>
						<StyledParagraph needsBorder={false}>{about_me.value}</StyledParagraph>
					</Fragment>
				)}
			</StyledAbout>
			{image.value && <StyledPhoto src={image.value} />}
		</StyledAboutWrapper>
	);
};

export default About;
