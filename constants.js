'use strict';

const game = {
  w: 10,
  h: 10,
  hearts: 5,
  // timerTornado:
};
const skin = {
  angry: '\u{1F608}',
  happy: '\u{1F607}',
  heart: '\u{2764} ',
  empty: '  ',
  alarm: '\u{2757}'
};
const subject = [
  //num, count, skin
  [0, 1,  '\u{1F34F}'], //green apple
  [1, 3,  '\u{1F34E}'], //red apple
  [2, 0,  '\u{1F32A} '], //tornado
];

module.exports = { game, skin, subject };
