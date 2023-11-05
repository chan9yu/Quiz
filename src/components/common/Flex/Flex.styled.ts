import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

export interface FlexStyledProps {
	$alignItems?: CSSProperties['alignItems'];
	$direction?: CSSProperties['flexDirection'];
	$flexGrow?: CSSProperties['flexGrow'];
	$flexWrap?: CSSProperties['flexWrap'];
	$fullWidth?: boolean;
	$gap?: CSSProperties['gap'];
	$height?: CSSProperties['height'];
	$justifyContent?: CSSProperties['justifyContent'];
	$width?: CSSProperties['width'];
}

export const FlexStyled = styled.div<FlexStyledProps>`
	display: flex;

	${props => css`
		align-items: ${props.$alignItems};
		flex-direction: ${props.$direction};
		flex-grow: ${props.$flexGrow};
		flex-wrap: ${props.$flexWrap};
		width: ${props.$fullWidth ? '100%' : typeof props.$width === 'number' ? `${props.$width}px` : props.$width};
		gap: ${typeof props.$gap === 'number' ? `${props.$gap}px` : props.$gap};
		height: ${typeof props.$height === 'number' ? `${props.$height}px` : props.$height};
		justify-content: ${props.$justifyContent};
	`}
`;
