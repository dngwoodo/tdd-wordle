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
}

module.exports = Game;
