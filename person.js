'use strict';
const { game, skin } = require('./constants');
const { random } = require('./main');

class Person {
  constructor(x, y, skins) {
    this.xIm = x;
    this.yIm = y;
    this.heart = Array(game.hearts).fill(skin.heart);
    this.counter = 0;
    this.skin = skins;
  }
  set x(x) {
    if (x < 0) this.xIm = 0;
    else if (x > game.w - 1)  this.xIm = game.w - 1;
    else this.xIm = x;
  }
  set y(y) {
    if (y < 0) this.yIm = 0;
    else if (y > game.h - 1)  this.yIm = game.h - 1;
    else this.yIm = y;
  }
  get x() {
    return this.xIm;
  }
  get y() {
    return this.yIm;
  }
}
const angry = new Person(Math.round(((game.w - 1)*3)/4), Math.round(((game.h - 1))*3/4), skin.angry);
const happy = new Person(Math.round((game.w - 1)*1/4), Math.round((game.h - 1)*1/4), skin.happy);
class Tornado {
  constructor() {
    this.x = random(2) * (game.h - 1);
    this.y = random(2) * (game.w - 1);
    this.skin = skin.tornado;
  }
}

module.exports = { angry, happy, Tornado };
