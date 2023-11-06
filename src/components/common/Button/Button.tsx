import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Loader } from '..';
import type { CommonPropsWithChildren } from '../../../@types';
import * as S from './Button.styles';

export interface ButtonProps
	extends S.ButtonStyledProps,
		CommonPropsWithChildren,
		ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		$color = 'primary',
		$fullWidth = false,
		$loading = false,
		$size = 'md',
		$width,
		children,
		className,
		disabled,
		style,
		...rest
	} = props;

	const styledProps: S.ButtonStyledProps = {
		$color,
		$fullWidth,
		$loading,
		$size,
		$width
	};

	return (
		<S.ButtonStyled
			ref={ref}
			role="button"
			className={className}
			disabled={disabled || $loading}
			style={style}
			{...styledProps}
			{...rest}
		>
			{$loading && <Loader $borderWidth="2px" $color={$color} $size={16} />}
			{children}
		</S.ButtonStyled>
	);
});

Button.displayName = 'Button';

export default Button;
