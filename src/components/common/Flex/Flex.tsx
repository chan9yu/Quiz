import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';

import type { CommonPropsWithChildren } from '../../../@types';
import * as S from './Flex.styles';

export interface FlexProps extends S.FlexStyledProps, CommonPropsWithChildren, HTMLAttributes<HTMLElement> {
	tag?: keyof JSX.IntrinsicElements;
}

const Flex = forwardRef<HTMLElement, FlexProps>((props, ref) => {
	const {
		$alignItems = 'flex-start',
		$direction = 'row',
		$flexGrow = '0',
		$flexWrap = 'nowrap',
		$fullWidth,
		$gap,
		$height = 'auto',
		$justifyContent = 'flex-start',
		$width = 'auto',
		children,
		className,
		style,
		tag = 'div',
		...rest
	} = props;

	const styledProps: S.FlexStyledProps = {
		$alignItems,
		$direction,
		$flexGrow,
		$flexWrap,
		$fullWidth,
		$gap,
		$height,
		$justifyContent,
		$width
	};

	return (
		<S.FlexStyled
			ref={ref as ForwardedRef<HTMLDivElement>}
			role="region"
			as={tag}
			className={className}
			style={style}
			{...styledProps}
			{...rest}
		>
			{children}
		</S.FlexStyled>
	);
});

Flex.displayName = 'Flex';

export default Flex;
