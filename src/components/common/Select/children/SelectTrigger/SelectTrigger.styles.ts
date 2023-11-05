import styled, { css } from 'styled-components';

export const SelectTriggerStyled = styled.div`
	width: 100%;
	padding: 12px;
	box-sizing: border-box;
	border-radius: 4px;
	cursor: pointer;
	transition: all 120ms linear;
	position: relative;

	&::before {
		content: '▴';
		position: absolute;
		top: 50%;
		right: 12px;
		font-size: 12px;
		transform: translateY(-50%) rotate(0.5turn);
	}

	${props => css`
		border: 1px solid ${props.theme.color.gray['400']};
		color: ${props.theme.color.gray['700']};
		font-weight: ${props.theme.typography.weight['medium']};

		&:hover {
			border: 1px solid ${props.theme.color.primary['500']};
			box-shadow: inset 0 0 0 1px ${props.theme.color.primary['500']};
		}
	`}
`;
