/*
* word는 5글자를 가진다. -> o.k.
* word list에 word가 있는지 체크한다. -> o.k.
* */

const Word = require('./Word');
const WordList = require('./WordList');
const Game = require('./Game');

const context = describe;

describe('wordle', () => {
  test('word should have length of five', () => {
    const ERROR_MESSAGE = '5글자여야만 합니다.';

    expect(() => new Word('apple')).not.toThrowError(new Error(ERROR_MESSAGE));
  });

  context('with word less or more than length of five', () => {
    it('it prompts an Error Message "5글자"', () => {
      const ERROR_MESSAGE = '5글자여야만 합니다.';

      expect(() => new Word('app')).toThrowError(new Error(ERROR_MESSAGE));
    });
  });

  test('check if the word is in the word list.', () => {
    const dictionary = [
      'apple', 'mango', 'jelly',
    ];

    const wordList = new WordList(dictionary);

    expect(wordList.include(new Word('apple'))).toBeTruthy();
    expect(wordList.include(new Word('abcde'))).toBeFalsy();
  });

  /**
   * findGreenPositionsFor() {}
   * findYellowPositionsFor() {}
   * findGrayPositionsFor() {}
 */

  describe('findGreenPositionsFor', () => {
    context('answer 의 position letter와 guess 의 position letter가 일치하면', () => {
      it('해당 position들을 반환한다.', () => {
        const answer = new Word('apple');

        const game = new Game(answer);

        expect(game.findGreenPositionsFor(new Word('axxoo'))).toEqual([0]);
        expect(game.findGreenPositionsFor(new Word('apxoo'))).toEqual([0, 1]);
        expect(game.findGreenPositionsFor(new Word('appoe'))).toEqual([0, 1, 2, 4]);
      });
    });
  });

  describe('findYellowPositionsFor', () => {
    context('answer 에 guess 의 letter가 포함되면', () => {
      test('해당 position들을 반환한다.', () => {
        const answer = new Word('apple');

        const game = new Game(answer);

        expect(game.findYellowPositionsFor(new Word('xxxxa'))).toEqual([4]);
        expect(game.findYellowPositionsFor(new Word('xpxxx'))).toEqual([1]);
        expect(game.findYellowPositionsFor(new Word('axxpx'))).toEqual([0, 3]);
      });
    });
  });

  describe('findeGrayPositionsFor', () => {
    context('answer 에 guess 의 letter가 포함되지 않는다면', () => {
      it('해당 positions들을 반환한다.', () => {
        const answer = new Word('apple');

        const game = new Game(answer);

        expect(game.findGrayPositionsFor(new Word('xxxxx'))).toEqual([0, 1, 2, 3, 4]);
      });
    });
  });
});
