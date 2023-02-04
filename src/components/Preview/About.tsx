import styled from 'styled-components';
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

const About = () => {
	const img_Url =
		'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80';
	return (
		<StyledAboutWrapper>
			<StyledAbout>
				<StyledName>სანდრო ბარნოვი</StyledName>
				<StyledContactInfo>
					<StyledEmail>
						<MdAlternateEmail />
						<p>john.doe@redberry.ge</p>
					</StyledEmail>
					<StyledPhoneNum>
						<FaPhoneAlt />
						<p>+995 597 63 45 16</p>
					</StyledPhoneNum>
				</StyledContactInfo>
				<StyledTitle>ჩემ შესახებ</StyledTitle>
				<StyledParagraph>
					ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
				</StyledParagraph>
			</StyledAbout>
			<StyledPhoto src={img_Url} />
		</StyledAboutWrapper>
	);
};

export default About;
