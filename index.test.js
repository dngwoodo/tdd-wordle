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

    expect(() => new Word('app')).toThrowError(new Error(ERROR_MESSAGE));
    expect(() => new Word('apple')).not.toThrowError(new Error(ERROR_MESSAGE));
  });

  test('check if the word is in the word list.', () => {
    const dictionary = [
      'apple', 'mango', 'jelly',
    ];

    const wordList = new WordList(dictionary);

    expect(wordList.include(new Word('apple'))).toBeTruthy();
    expect(wordList.include(new Word('abcde'))).toBeFalsy();
  });

  // 회고
  // 동우님
  // - 용어 정리가 중요하다.
  // - 다른 파트 와의 의사소통뿐 아니라, 개발할때도 용어를 잘 정의해놓는것이 중요하다고 느꼈다.
  // - 도메인에 대한 이해가 정말 중요할 것 같다.
  // - 기록을 잘 해두니깐 다음 스텝으로 넘어갈 수 있었다.
  // 덕수님
  // - 온전히 이름 짓기에 대해서 생각할 수 있는 시간이 너무 좋았다.
  // - 용어에 대한 싱크를 맞춰놓으니 확실히 다음 스텝이 자연스럽게 진행되었다.
  // - 프로그래머의 뇌에서 어려운 문제를 풀려면 쉬운 문제들을 자동화해라라는 말이 있었다.
  // 넥스트 스텝으로 넘어가기 위한 것과 비슷한 맥락인 것 같다.

  // 회고
  // 동우님
  // - 시간이 지나고 나서 기능명세를 읽어보니 확실히 용어정리가 중요하다는 것을 다시 한번 느꼈다
  // - 실용적인 페어를 위한 것이 무엇이 있을지 고민하는 시간을 가졌다.
  // 덕수님
  // - 다시 보면 또 이상하다. 좀 더 다른 의견에 열려있어야 겠다.
  // - 짝프로그래밍은 쉽지 않다. 생산성을 끌어올리는게 중요한데, 결국 사람의 문제.
  // 형탁님
  // - 둘이 잘 맞으면 페어도 같이 코드를 치는 식으로 진행해도 괜찮을 것 같다.
  // - 두분이서 하는 것을 보니 작게 접근하는 법을 시도하고 있구나 라고 생각했다.

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
});
