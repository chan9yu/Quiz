import styled, { DefaultTheme, css } from 'styled-components';

export interface TextStyledProps {
	$size?: keyof DefaultTheme['typography']['size'];
	$weight?: keyof DefaultTheme['typography']['weight'];
	$color?: keyof DefaultTheme['color'];
	$colorLevel?: keyof DefaultTheme['color']['primary'];
}

export const TextStyled = styled.span<TextStyledProps>`
	${props => css`
		color: ${props.theme.color[props.$color || 'gray'][props.$colorLevel || '900']};
		font-size: ${props.theme.typography.size[props.$size || '300']};
		font-weight: ${props.theme.typography.weight[props.$weight || 'regular']};
	`}
`;
