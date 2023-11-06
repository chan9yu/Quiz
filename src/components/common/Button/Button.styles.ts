import { CSSProperties } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

export interface ButtonStyledProps {
	$color?: keyof DefaultTheme['color'];
	$loading?: boolean;
	$size?: 'sm' | 'md' | 'lg';
	$width?: CSSProperties['width'];
	$fullWidth?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	box-sizing: border-box;
	margin: 0;
	border-radius: 4px;
	border: 0;
	transition: all 120ms linear;
	cursor: pointer;

	${props => {
		const buttonSize = {
			sm: {
				paddingY: '12px',
				fontSize: '14px',
				height: '32px'
			},
			md: {
				paddingY: '16px',
				fontSize: '14px',
				height: '48px'
			},
			lg: {
				paddingY: '24px',
				fontSize: '18px',
				height: '64px'
			}
		};

		return css`
			width: ${props.$fullWidth ? '100%' : typeof props.$width === 'number' ? `${props.$width}px` : props.$width};
			height: ${buttonSize[props.$size ?? 'md'].height};
			padding: 0 ${buttonSize[props.$size ?? 'md'].paddingY};
			font-size: ${buttonSize[props.$size ?? 'md'].fontSize};
			color: ${props.theme.color.gray['50']};
			background-color: ${props.theme.color[props.$color ?? 'primary']['500']};
			opacity: ${props.$loading && 0.75};

			&:disabled {
				cursor: ${props.$loading ? 'progress' : 'not-allowed'};
				opacity: 0.75;
			}

			&:hover:not(&:disabled) {
				background-color: ${!props.$loading && props.theme.color[props.$color ?? 'primary']['600']};
			}

			&:active:not(&:disabled) {
				transform: scale(96%);
			}
		`;
	}}
`;
