import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';

import type { CommonPropsWithChuldren } from '../../../@types';
import * as S from './Text.styled';

interface TextProps extends S.TextStyledProps, CommonPropsWithChuldren, HTMLAttributes<HTMLElement> {
	tag?: keyof JSX.IntrinsicElements;
}

const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
	const {
		$color = 'gray',
		$colorLevel = '900',
		$size = '100',
		$weight = 'regular',
		children,
		className,
		style,
		tag = 'span',
		...rest
	} = props;

	const styledProps: S.TextStyledProps = {
		$color,
		$colorLevel,
		$size,
		$weight
	};

	return (
		<S.TextStyled
			ref={ref as ForwardedRef<HTMLSpanElement>}
			as={tag}
			className={className}
			style={style}
			{...styledProps}
			{...rest}
		>
			{children}
		</S.TextStyled>
	);
});

Text.displayName = 'Text';

export default Text;
