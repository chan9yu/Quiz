import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 15px;
	border-radius: 10px;
	transition: 0.3s;

	${props => css`
		background-color: ${props.theme.color.gray[100]};
		border: 1px solid ${props.theme.color.gray[200]};
	`}
`;

const gradientKeyframes = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
	}
`;

export const Inner = styled.div<{ $percent: number }>`
	height: 100%;
	background-size: 200% 200%;
	animation: ${gradientKeyframes} 10s ease infinite;
	border-radius: inherit;
	transition: 0.3s;

	${props => css`
		width: ${props.$percent}%;
		background: linear-gradient(-45deg, ${props.theme.color.secondary[500]}, ${props.theme.color.primary[500]});
	`}
`;
