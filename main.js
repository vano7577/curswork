'use strict';

const { game, skin, subject } = require('./constants');
const { fieldjo, fi } = require('./fi');
const { angry, happy } = require('./person');

function timer(func, g, seconds) {
  setInterval(
    () => { func(g); }, seconds
  );
}
function check(player) {
  for (let i = 0; i < subject.length; i++) {
    if (fi[player.y][player.x] === subject[i][2]) {
      if (subject[i][1]) player.counter += subject[i][1];
      else player.heart.pop();
    }
  }
  
  if(player = angry&& fi[angry.y][angry.x] === skin.happy ){
    happy.heart.pop()
    if(happy.x != Math.round((game.w - 1)*1/4) && happy.y!= Math.round((game.h - 1)*1/4))
    {happy.x = Math.round((game.w - 1)*1/4)
    happy.y= Math.round((game.h - 1)*1/4)}
    else {happy.x = Math.round((game.w - 1)*3/4)
    happy.y= Math.round((game.h - 1)*3/4)}
  }
  if(player = happy && fi[happy.y][happy.x] === skin.angry){
    angry.heart.pop()
    if(angry.x != Math.round((game.w - 1)*1/4) && angry.y!= Math.round((game.h - 1)*1/4))
    {angry.x = Math.round((game.w - 1)*3/4)
      angry.y= Math.round((game.h - 1)*3/4)}
    else {angry.x = Math.round((game.w - 1)*1/4)
      angry.y= Math.round((game.h - 1)*1/4)}
  }
}

timer(spawnApple, subject[0][2], 4000);
timer(spawnApple, subject[1][2], 3000);
timer(spawnApple, subject[2][2], 2000);

function random(max) {
  return Math.ceil(Math.random() * max);
}

function spawnApple(color) {
  const xapple = random(game.h) - 1;
  const yapple = random(game.w) - 1;
  if (fi[yapple][xapple] === skin.empty) fi[yapple][xapple] = color;
  draw();
}
const table = {};
function maketable() {
  function Value(obj) {
    this.points = obj.counter;
    this.lives = obj.heart.join(' ');
  }
  table.angry = new Value(angry);
  table.happy = new Value(happy);
  return table;
}
function draw() {
  console.clear();
  console.log(fieldjo(fi));
  maketable();
  console.table(table);
  if(angry.heart.length==0||happy.counter==200){
    console.log("Happy player win! \u{1F389}");
    process.exit();
  }
  if(happy.heart.length==0||angry.counter==200 ){
    console.log("Angry player win! \u{1F389}");
    process.exit();
  }
}
let Start =true;
if(Start){ 
  fi[happy.y][happy.x] = skin.happy;
  fi[angry.y][angry.x] = skin.angry;
  draw();
  Start=false;
}

module.exports = { check };
const { main } = require('./key');
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    main(key.name);
    draw();
  }
});
