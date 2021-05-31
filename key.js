'use strict';

const { check } = require('./main');
const { skin } = require('./constants');
const { angry, happy } = require('./person');
const { fi } = require('./fi');


function mainsecond(deltaX, deltaY, per) {
  fi[per.y][per.x] = skin.empty;
  per.x += deltaX;
  per.y += deltaY;
  console.log(per.x,per.y)
  check(per);
  fi[per.y][per.x] = per.skin;
}


const moves = {
  s: () => mainsecond(0,  1, angry), //по у вниз
  a: () => mainsecond(-1, 0, angry),
  d: () => mainsecond(1,  0, angry),
  w: () => mainsecond(0, -1, angry),

  down: () =>  mainsecond(0,   1, happy),
  left: () =>  mainsecond(-1,  0, happy),
  right: () => mainsecond(1,   0, happy),
  up: ()  =>   mainsecond(0,  -1, happy),
};

function main(k) {
  moves[k]();
}

module.exports = { main };

