import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
export const StyledDegreeAndDateWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 56px;
`;
export const StyledSelectWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h3 {
		margin-bottom: 4px;
		font-weight: 600;
		font-size: 16px;
	}
`;

export const StyledSelect = styled.div`
	border-radius: 4px;
	font-size: 16px;
	padding: 14px 16px;
	border: 1px solid ${(props) => props.theme.colors.inputBorder};
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	svg {
		font-size: 14px;
	}
	cursor: pointer;
	user-select: none;
`;

export const StyledOptions = styled.ul`
	position: absolute;
	top: 103%;
	left: 0;
	width: 100%;
	background-color: white;
	box-shadow: 0px 16px 28px 0px rgba(0, 0, 0, 0.24);
	border-radius: 4px;
	li {
		width: 100%;
		padding: 10px 16px;
		font-size: 16px;
		transition: background 0.2s ease-out;
		&:hover {
			background: rgba(195, 220, 238, 1);
		}
	}
`;
