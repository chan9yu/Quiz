import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Loader } from '..';
import type { CommonPropsWithChuldren } from '../../../@types';
import * as S from './Button.styles';

interface ButtonProps extends S.ButtonStyledProps, CommonPropsWithChuldren, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		$color = 'primary',
		$fullWidth = false,
		$loading = false,
		$size = 'md',
		$width,
		children,
		className,
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
		<S.ButtonStyled ref={ref} className={className} style={style} {...styledProps} {...rest}>
			{$loading && <Loader $borderWidth="2px" $color={$color} $size={16} />}
			{children}
		</S.ButtonStyled>
	);
});

Button.displayName = 'Button';

export default Button;
