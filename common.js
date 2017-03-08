
function getBoolean() {
  return Math.random() >= 0.5;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor(clr) {
  return clr[getRandomInt(0, clr.length)];
}

function getColorThreadling() {
  return getColor(colorsThreading);
}

function getColorTreadling() {
  return getColor(colorsTreadling);
}
