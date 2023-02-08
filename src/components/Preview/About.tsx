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
		return [name, surname, email, phone_number, about_me, image].some((value) => value !== '');
	};

	return (
		<StyledAboutWrapper needsBorder={isAnyInputFilled()}>
			<StyledAbout>
				<StyledName>
					{name} {surname}
				</StyledName>
				<StyledContactInfo>
					{email && (
						<StyledEmail>
							<MdAlternateEmail />
							<p>{email}</p>
						</StyledEmail>
					)}
					{phone_number && (
						<StyledPhoneNum>
							<FaPhoneAlt />
							<p>{phone_number}</p>
						</StyledPhoneNum>
					)}
				</StyledContactInfo>
				{about_me && (
					<Fragment>
						<StyledTitle>ჩემ შესახებ</StyledTitle>
						<StyledParagraph needsBorder={false}>{about_me}</StyledParagraph>
					</Fragment>
				)}
			</StyledAbout>
			{image && <StyledPhoto src={image} />}
		</StyledAboutWrapper>
	);
};

export default About;
