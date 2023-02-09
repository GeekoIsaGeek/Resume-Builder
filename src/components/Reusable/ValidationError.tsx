import styled from 'styled-components';

const ValidationError = () => {
	return <StyledError>გასაგრძელებლად, დარწმუნდით რომ ყველა ველი სწორად გაქვთ შევსებული!</StyledError>;
};
export default ValidationError;

const StyledError = styled.p`
	color: red;
	font-weight: bold;
	padding-bottom: 50px;
`;
