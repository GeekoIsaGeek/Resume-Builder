import React from 'react';
import styled from 'styled-components';

interface Props {
	children: React.ReactNode;
}

const FormInnerWrapper = ({ children }: Props) => {
	return <StyledFormInnerWrapper>{children}</StyledFormInnerWrapper>;
};

export default FormInnerWrapper;

const StyledFormInnerWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
