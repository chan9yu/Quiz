import { HTMLAttributes, forwardRef } from 'react';

import type { CommonProps } from '../../../@types';
import * as S from './Loader.styles';

export interface LoaderProps extends S.LoaderStyledProps, CommonProps, HTMLAttributes<HTMLDivElement> {}

const Loader = forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
	const {
		$borderWidth = '5px',
		$color = 'primary',
		$position = 'static',
		$size = '50px',
		className,
		style,
		...rest
	} = props;

	const styledProps: S.LoaderStyledProps = {
		$borderWidth,
		$color,
		$position,
		$size
	};

	return <S.LoaderStyled ref={ref} role="status" className={className} style={style} {...styledProps} {...rest} />;
});

Loader.displayName = 'Loader';

export default Loader;
