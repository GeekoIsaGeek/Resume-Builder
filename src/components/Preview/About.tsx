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
	const img_Url =
		'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80';
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
						<StyledParagraph>{resumeData.about_me}</StyledParagraph>
					</Fragment>
				)}
			</StyledAbout>
			<StyledPhoto src={img_Url} />
		</StyledAboutWrapper>
	);
};

export default About;
