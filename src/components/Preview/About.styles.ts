import styled from 'styled-components';

export const StyledAboutWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	padding-bottom: 24px;
	border-bottom: 1px solid #bcbcbc;
`;
export const StyledAbout = styled.div`
	width: 100%;
`;
export const StyledPhoto = styled.img`
	height: 246px;
	width: 246px;
	object-fit: cover;
	border-radius: 50%;
`;
export const StyledName = styled.h1`
	color: ${(props) => props.theme.colors.previewTitle};
	font-size: ${(props) => props.theme.fontSize.previewName};
	margin-bottom: 17px;
	word-break: break-word;
`;
export const StyledContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 34px;
`;
const StyledContact = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	svg {
		color: ${(props) => props.theme.colors.previewIcon};
	}
	p {
		font-size: ${(props) => props.theme.fontSize.previewTitle};
		color: ${(props) => props.theme.colors.offBlack};
		font-weight: 500;
	}
`;
export const StyledEmail = styled(StyledContact)`
	svg {
		font-size: 20px;
	}
`;
export const StyledPhoneNum = styled(StyledContact)``;
