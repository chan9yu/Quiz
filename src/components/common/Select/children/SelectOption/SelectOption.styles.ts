import styled, { css } from 'styled-components';

export const SelectOptionStyled = styled.div<{ $active: boolean }>`
	padding: 6px 12px;
	box-sizing: border-box;
	cursor: pointer;

	${props => css`
		background-color: ${props.$active ? props.theme.color.gray[300] : props.theme.color.gray[50]};

		&:hover {
			background-color: ${props.theme.color.gray[300]};
		}
	`}
`;
