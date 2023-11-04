import { HTMLAttributes, forwardRef } from 'react';

import type { CommonProps } from '../../../@types';
import * as S from './Loader.styled';

interface LoaderProps extends S.LoaderStyledProps, CommonProps, HTMLAttributes<HTMLDivElement> {}

const Loader = forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
	const { $color = 'primary', $position = 'static', $size = '50px', className, style, ...rest } = props;

	const styledProps: S.LoaderStyledProps = {
		$color,
		$position,
		$size
	};

	return <S.LoaderStyled ref={ref} className={className} style={style} {...styledProps} {...rest} />;
});

Loader.displayName = 'Loader';

export default Loader;
