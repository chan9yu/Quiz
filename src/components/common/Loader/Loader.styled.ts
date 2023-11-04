import { CSSProperties } from 'react';
import styled, { DefaultTheme, css, keyframes } from 'styled-components';

export interface LoaderStyledProps {
	$color?: keyof DefaultTheme['color'];
	$position?: CSSProperties['position'];
	$size?: CSSProperties['width'];
}

const spinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderStyled = styled.div<LoaderStyledProps>`
	border-radius: 50%;
	animation: ${spinKeyframes} 1s linear infinite;

	${props => css`
		width: ${typeof props.$size === 'number' ? `${props.$size}px` : props.$size};
		height: ${typeof props.$size === 'number' ? `${props.$size}px` : props.$size};
		border: 5px solid ${props.theme.color.gray['100']};
		border-bottom: 5px solid ${props.theme.color[props.$color || 'primary']['500']};
		position: ${props.$position};
	`}
`;
