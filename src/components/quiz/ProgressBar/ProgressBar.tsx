import * as S from './ProgressBar.styles';

export interface ProgressBarProps {
	/**
	 * - 진행상황을 나타내는 속성입니다.
	 * - `0 ~ 100 사이에 숫자만` 입력가능합니다.
	 */
	percent: number;
}

const ProgressBar = (props: ProgressBarProps) => {
	const { percent } = props;
	const isPercentageValid = percent >= 0 && percent <= 100 && Number.isInteger(percent);

	if (!isPercentageValid) {
		throw new Error('0 ~ 100 사이에 숫자만 입력가능합니다.');
	}

	return (
		<S.Wrapper role="progressbar">
			<S.Inner $percent={percent} />
		</S.Wrapper>
	);
};

export default ProgressBar;
