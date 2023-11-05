import styled, { css } from 'styled-components';

export const SelectOptionsStyled = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-height: 300px;
	overflow-y: scroll;
	border-radius: 4px;
	padding: 6px 0;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	z-index: 2;

	${props => css`
		border: 1px solid ${props.theme.color.gray[300]};
		background-color: ${props.theme.color.gray[50]};
	`}
`;
