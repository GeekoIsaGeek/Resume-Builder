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
	const img_Url = 'https://ied.eu/wp-content/uploads/2018/04/entrepreneur-1.jpg';
	return (
		<StyledAboutWrapper>
			<StyledAbout>
				<StyledName>
					{resumeData.name} {resumeData.surname}
				</StyledName>
				<StyledContactInfo>
					{resumeData.email && (
						<StyledEmail>
							<MdAlternateEmail />
							<p>{resumeData.email}</p>
						</StyledEmail>
					)}
					{resumeData.phone_number && (
						<StyledPhoneNum>
							<FaPhoneAlt />
							<p>{resumeData.phone_number}</p>
						</StyledPhoneNum>
					)}
				</StyledContactInfo>
				{resumeData.about_me && (
					<Fragment>
						<StyledTitle>ჩემ შესახებ</StyledTitle>
						<StyledParagraph needsBorder={false}>{resumeData.about_me}</StyledParagraph>
					</Fragment>
				)}
			</StyledAbout>
			<StyledPhoto src={resumeData.image} />
		</StyledAboutWrapper>
	);
};

export default About;
