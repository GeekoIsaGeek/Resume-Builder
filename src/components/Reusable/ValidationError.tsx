import styled from 'styled-components';
import { useFormCtx } from '../../store/formContext';

const ValidationError = () => {
	const { currentForm } = useFormCtx();
	return (
		<StyledError>
			{currentForm.get < 3 ? 'გასაგრძელებლად' : 'დასასრულებლად'}, დარწმუნდით რომ ყველა ველი სწორად გაქვთ შევსებული!
		</StyledError>
	);
};
export default ValidationError;

const StyledError = styled.p`
	color: red;
	font-weight: bold;
	padding-bottom: 50px;
`;
