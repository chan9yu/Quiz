import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 12px;
	box-sizing: border-box;
	border-radius: 4px;

	${props => css`
		background-color: ${props.theme.color.white};
		border: 1px solid ${props.theme.color.gray[200]};
	`}
`;
