class Game {
  constructor(answer) {
    this.answer = answer;
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

    return result;
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

    return positions.filter((p) => answerLetters.includes(guessLetters[p]));
  }

  /**
 * Goal: 모든 index의 포지션을 돌려준다.
 *
 * 1. guess와 answer가 필요하다.
 * 2. guess의 하나하나의 레터가 answer에 있는지를 확인한다.
 *    -
 *
 * 갓챠: 반복은 먼저 찾자.
 */

  // eslint-disable-next-line class-methods-use-this
  findGrayPositionsFor(guess) {
    const guessLetters = guess.getLetters();
    const answerLetters = this.answer.getLetters();

    const result = [];

    if (guessLetters.includes(answerLetters[0]) === false) {
      result.push(0);
    }

    if (guessLetters.includes(answerLetters[1]) === false) {
      result.push(1);
    }

    if (guessLetters.includes(answerLetters[2]) === false) {
      result.push(2);
    }

    if (guessLetters.includes(answerLetters[3]) === false) {
      result.push(3);
    }

    if (guessLetters.includes(answerLetters[4]) === false) {
      result.push(4);
    }

    return result;
  }
}

module.exports = Game;
