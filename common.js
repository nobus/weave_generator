
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

function paramsParser() {
  var ret = {};

  var query = window.location.search.substring(1);
  var vars = query.split("&");

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair.length === 2) ret[pair[0]] = pair[1];
  }

  return ret;
}

function setColorsFromParams(colorsString) {
  // colorsString = 'f8fae5,e69e91,a1c8e6'
  var ret = [];
  var colors = colorsString.split(',');

  for (var i = 0; i < colors.length; i++) {
    ret.push('#' + colors[i]);
  }

  return ret;
}
