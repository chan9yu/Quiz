import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 480px;
	width: 100%;
	height: 100%;
	padding: 60px 20px 20px;
	box-sizing: border-box;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.color.gray['50']};
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
