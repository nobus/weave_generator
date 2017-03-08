
var weaveSize = 100;

// !!!!!!!! put colors this place !!!!!!!!
var colorsThreading = ['#f8fae5'];
var colorsTreadling = ['#f8fae5', '#e69e91', '#a1c8e6', '#f5e862', '#94bf41', '#2d3a80', '#476eb3'];

var weave = document.getElementById('weave');

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
  return clr[getRandomInt(0, colors.length)];
}

function getColorThreadling() {
  return getColor(colorsThreading);
}

function getColorTreadling() {
  return getColor(colorsTreadling);
}

var treadlingColors = [];
for (var i = 0; i < weaveSize; i++) treadlingColors.push(getColorTreadling());

for (var i = 0; i < weaveSize; i++) {
  var threadingColor = getColorThreadling();

  var col = document.createElement("DIV");
  col.className = "column";

  for (var ii = 0; ii < weaveSize; ii++) {
    var elem = document.createElement("DIV");

    elem.className = getBoolean() ? 'threadingElem' : 'treadlingElem';

    if (elem.className === 'threadingElem') elem.style.backgroundColor = threadingColor;
    else elem.style.backgroundColor = treadlingColors[ii];

    col.appendChild(elem);
  }

  weave.appendChild(col);
}
