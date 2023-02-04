import styled from 'styled-components';

const AddMoreBtn = ({ value }: { value: string }) => {
	return <StyledButton onClick={(e) => e.preventDefault()}>{value}</StyledButton>;
};

export default AddMoreBtn;

const StyledButton = styled.button`
	background-color: #62a1eb;
	color: white;
	border-radius: 4px;
	border: none;
	outline: unset;
	font-size: 16px;
	font-weight: 500;
	padding: 14px 21px;
	width: 290px;
	margin-bottom: 110px;
	cursor: pointer;
	transition: background 0.2s ease-out;
	&:hover {
		background: #4d90dd;
	}
`;
