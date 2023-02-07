import styled from 'styled-components';

export const StyledParagraph = styled.p`
	line-height: 22px;
	font-size: 16px;
	word-break: break-word;
`;

export const StyledTitle = styled.h3`
	font-size: 20px;
	color: ${(props) => props.theme.colors.previewTitle};
	margin-bottom: 15px;
	font-weight: bold;
`;

export const StyledRole = styled.h3`
	font-size: 16px;
	color: ${(props) => props.theme.colors.offBlack};
`;
export const StyledDate = styled.h3`
	color: #909090;
	font-style: italic;
	font-weight: 400;
	font-size: 16px;
	padding: 7px 0 16px 0;
`;
