import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Flex, Text } from '../../components';
import { ROUTER_PATH } from '../../constants';
import { resetQuizAction } from '../../store';
import * as S from './ErrorPage.styles';

const ErrorPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleMoveToHomePage = () => {
		dispatch(resetQuizAction());
		navigate(ROUTER_PATH.ROOT);
	};

	const handleMoveToPrevPage = () => {
		navigate(-1);
	};

	return (
		<S.Wrapper>
			<Flex $gap={4}>
				<Text $color="primary" $colorLevel="700" $weight="bold" $size="900">
					404
				</Text>
				<Text $color="secondary" $colorLevel="700" $weight="bold" $size="900">
					Not Found
				</Text>
			</Flex>
			<Text $colorLevel="700" $size="600">
				페이지를 찾을 수 없습니다.
			</Text>
			<Flex $direction="column" $alignItems="center" style={{ margin: '32px 0' }}>
				<Text $colorLevel="500">페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</Text>
				<Text $colorLevel="500">입력하신 주소가 정확한지 다시 한 번 확인해주세요.</Text>
			</Flex>
			<Flex $fullWidth $gap={12} $direction="column">
				<Button $fullWidth onClick={handleMoveToHomePage}>
					홈으로
				</Button>
				<Button $fullWidth $color="gray" onClick={handleMoveToPrevPage}>
					이전 페이지
				</Button>
			</Flex>
		</S.Wrapper>
	);
};

export default ErrorPage;
