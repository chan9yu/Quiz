import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 480px;
	height: 100%;
	padding: 60px 20px 20px;
	box-sizing: border-box;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.color.gray['50']};
`;
