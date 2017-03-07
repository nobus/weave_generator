
var weaveSize = 100;
var colors = ['#4286f4', '#f47741', '#33b73a'];

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

function getColor() {
  return colors[getRandomInt(0, colors.length)];
}

var treadlingColors = [];
for (var i = 0; i < weaveSize; i++) treadlingColors.push(getColor());

for (var i = 0; i < weaveSize; i++) {
  var threadingColor = getColor();

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
