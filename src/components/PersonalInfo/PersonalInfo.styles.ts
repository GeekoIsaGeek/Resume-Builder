import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;
`;
export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;
`;
export const StyledInputGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
export const StyledUploader = styled.div`
	overflow: hidden;
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	margin: 20px 0;
	button {
		margin-left: 20px;
		background: #0e80bf;
		color: white;
		border: none;
		outline: unset;
		font-weight: 500;
		font-size: 14px;
		padding: 6px 10px;
		border-radius: 4px;
		cursor: pointer;
		transition: background 0.2s linear;
		&:hover {
			background: #1d9bdf;
		}
	}
	span {
		width: 232px;
		height: 22px;
		font-size: 18px;
		font-weight: 600;
		color: ${(props) => props.theme.colors.offBlack};
	}
	input {
		width: 232px;
		font-size: 30px;
		position: absolute;
		height: inherit;
		top: 0;
		left: 0;
		opacity: 0;
	}
`;
