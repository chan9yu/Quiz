describe('My first test', () => {
	const selectAmount = () => {
		cy.get('#amount_select').first().click();
		cy.get('#amount_select').children().last().children().first().click({ force: true });
	};

	const startQuiz = () => {
		cy.get('#quiz-start').invoke('text').should('eq', '퀴즈 풀기');
		cy.get('#quiz-start').click();
	};

	const answerQuestion = () => {
		const randomIndex = Math.floor(Math.random() * 4);
		cy.get('#answer-list').children('#answer-item').eq(randomIndex).click();
	};

	beforeEach(() => {
		cy.visit('http://localhost:3035/');
		selectAmount();
		startQuiz();
	});

	it('사용자는 `퀴즈 풀기` 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.', () => {
		// 이미 beforeEach()에서 시작됨
	});

	it('사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.', () => {
		cy.get('#answer-list').children('#answer-item').should('have.length', 4);
	});

	it('사용자는 답안을 선택하면 다음 문항을 볼 수 있다.', () => {
		answerQuestion();
		cy.get('#next-btn').should('be.visible').invoke('text').should('eq', '다음 문항');
	});

	it('답안이 맞았는지 틀렸는지 바로 알 수 있다.', () => {
		answerQuestion();
		cy.get('#correct_text, #incorrect_text').should('exist');
	});

	it('다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.', () => {
		answerQuestion();
		cy.get('#next-btn').click();
	});

	it('모든 문항을 다 풀면 사용자는 결과 정보를 볼 수 있다.', () => {
		for (let i = 0; i < 5; i++) {
			answerQuestion();
			cy.get('#next-btn').click();
		}
		cy.get('#seconds').should('be.visible');
		cy.get('#correct-count').should('be.visible');
		cy.get('#incorrect-count').should('be.visible');
		cy.get('#result-chart').should('be.visible');
	});
});
