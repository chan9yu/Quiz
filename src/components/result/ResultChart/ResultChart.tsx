import { Pie } from 'react-chartjs-2';
import { useTheme } from 'styled-components';

import * as S from './ResultChart.styles';

export interface ResultChartProps {
	correctCount: number;
	incorrectCount: number;
}

const ResultChart = (props: ResultChartProps) => {
	const { correctCount, incorrectCount } = props;
	const { color } = useTheme();

	return (
		<S.Wrapper role="graphics-document">
			<Pie
				data={{
					labels: ['정답', '오답'],
					datasets: [
						{
							label: '퀴즈 결과',
							data: [correctCount, incorrectCount],
							backgroundColor: [color.success[400], color.error[400]],
							borderColor: [color.success[400], color.error[400]],
							borderWidth: 1
						}
					]
				}}
			/>
		</S.Wrapper>
	);
};

export default ResultChart;
