import styled from 'styled-components';

export const StyledWrapper = styled.div`
	padding: 47px 150px 65px 150px;
	background-color: #f8f9f8;
	width: 1098px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 1080px;
`;

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 12px;
	margin-bottom: 77px;
	h2 {
		font-size: 24px;
		color: ${(props) => props.theme.colors.offBlack};
		font-weight: 700;
	}
	border-bottom: 1px solid ${(props) => props.theme.colors.offBlack};
	width: 100%;
	span {
		font-size: 20px;
		font-weight: 400;
	}
`;

export const StyledBtnBack = styled.button`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	border: none;
	font-size: 24px;
	position: absolute;
	left: 48px;
	top: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 0.2s linear;
	&:hover {
		background-color: #dfdfdf;
	}
`;

export const StyledBtn = styled.button`
	font-size: ${(props) => props.theme.fontSize.formBtn}
	font-weight: 500;
	background-color: ${(props) => props.theme.colors.formBtn};
    color:white;
    padding: 14px 25px;
    border-radius:4px;
    border:none;
    letter-spacing:0.08em;
    cursor:pointer;
    transition: background .2s ease-out;
    &:hover{
        background-color: ${(props) => props.theme.colors.formBtnHover}
    }
`;
