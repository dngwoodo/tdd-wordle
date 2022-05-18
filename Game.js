class Game {
  constructor(answer, chance) {
    this.answer = answer;
    this.chance = chance;
  }

  start() {
    // 기초적인 설계는 필요하기 때문에 우선 작성해본다.

    // InputView - 사용자 입력을 받는 역할과 책임
    // ResultView - 화면에 그려주는 역할과 책임
    // Referee - 사용자의 입력에 대한 힌트와 결과를 만들어내는 역할과 책임
    // Hint - 힌트를 만들어내는 역할과 책임
    // Game - 게임을 시작하는 역할과 책임

    // 힌트를 어떻게 화면에 그려줄지에 대한 명세
    // [[a, 'yellow'], [b, 'green'], [c, 'gray'], [d, 'gray'], [e, 'gray']]
    // a - yellow, b - green, c - gray, d - gray, e - gray

    const guess = InputView.askGuess();

    Referee.judge(answer, guess)

    if (Referee.result === 'success') {
      ResultView.show(`축하합니다. ${this.chance}만에 성공하셨네요. 👍`)
      return;
    }

    if (Referee.result === 'fail') {
      ResultView.show('실패하셨습니다. 힌트는 다음과 같습니다.')
      ResultView.show(Referee.hint)

      if (this.chance > 0) {
        this.chance = this.chance - 1;
        this.start();
      } else {
        ResultView.show(`정답은 ${answer} 였습니다. 아쉽네요. 다음에 봐요 ㅋ`)
      }
    }
  }


  findGreenPositionsFor(guess) {
    const guessLetters = guess.getLetters();
    const answerLetters = this.answer.getLetters();
    const result = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      if (guessLetters[i] === answerLetters[i]) {
        result.push(i);
      }
    }

    return result; // [0, 2, 4]
  }

  findYellowPositionsFor(guess) {
    const guessLetters = guess.getLetters();
    const answerLetters = this.answer.getLetters();
    // const result = [];

    // if (answerLetters.includes(guessLetters[4])) {
    //   result.push(4);
    // }

    // if (answerLetters.includes(guessLetters[1])) {
    //   result.push(1);
    // }

    // for (let i = 0; i < WORD_LETTER_LENGTH; i++) {
    //   if (answerLetters.includes(guessLetters[i])) {
    //     result.push(i);
    //   }
    // }

    // guessLetters.split('').forEach((letter, index) => {
    //   if (answerLetters.includes(letter)) {
    //     result.push(index);
    //   }
    // });

    // return result;

    const positions = [0, 1, 2, 3, 4];

    return positions.filter((p) => answerLetters.includes(guessLetters[p])); // [1, 5]
  }

  findGrayPositionsFor(guess) {
    const guessLetters = guess.getLetters();
    const answerLetters = this.answer.getLetters();

    const result = [];

    for (let i = 0; i < 5; i += 1) {
      if (guessLetters.includes(answerLetters[i]) === false) {
        result.push(i);
      }
    }

    return result; // []
  }
}


module.exports = Game;
