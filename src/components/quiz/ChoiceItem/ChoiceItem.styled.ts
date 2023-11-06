import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
	$answerStatus: 'correct' | 'incorrect' | null;
	$isCorrect: boolean;
	$selected: boolean;
}>`
	width: 100%;
	border-radius: 4px;
	padding: 12px 16px;
	box-sizing: border-box;
	cursor: pointer;
	transition: all 150ms linear;
	display: flex;
	align-items: center;
	gap: 16px;
	border-width: 1px;
	border-style: solid;

	${props => {
		const correctColor = props.theme.color.success[500];
		const incorrectColor = props.theme.color.error[500];
		const defaultColor = props.theme.color.gray[300];
		let borderColor = defaultColor;

		// 정답인 지문 UI로 노출
		if (props.$answerStatus && props.$isCorrect) {
			borderColor = correctColor;
		}

		// 내가 선택한 지문이 정답인지 오답인지 상태를 UI로 노출
		if (props.$selected) {
			if (props.$answerStatus === 'correct') {
				borderColor = correctColor;
			} else if (props.$answerStatus === 'incorrect') {
				borderColor = incorrectColor;
			}
		}

		return css`
			border-color: ${borderColor};
			background-color: ${props.theme.color.white};
			pointer-events: ${props.$answerStatus && 'none'};

			&:hover {
				background-color: ${props.theme.color.gray[200]};
			}
		`;
	}}
`;

export const PrefixItem = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	${props => css`
		color: ${props.theme.color.white};
		background-color: ${props.theme.color.secondary[500]};
	`}
`;
