'use strict';

const { game, skin, apple, dada } = require('./constants.js');

function field(h, w) { 
  const res = [];
  for (let i = 0; i <= h; i++) {
    res.push([]);
    for (let j = 0; j < w; j++) {
      res[i].push(skin.empty);
    }
  }
  return res;
}

function fieldup(sym) { //draw field up and down
  let fieldupdown = '*';
  for (let i = 0; i < (4 * game.w)-1; i++) {
    fieldupdown += sym;
  }
  return fieldupdown + '*';
}

function fieldjo(res) { //draw field
  let fieldjoin = '\n';
  for (let i = 0; i < res.length - 1; i++) {
    fieldjoin += '\u{2502}' + res[i].join(skin.empty)  + ' \u{2502}' + '\n';
  }
  return fieldup('\u{005F}') + fieldjoin  + fieldup('\u{203E}');
}

const fi = field(game.h, game.w);

module.exports = { fieldup, field, fieldjo, fi };
