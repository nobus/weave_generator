
var params = paramsParser();

var weaveSize = 100;

// !!!!!!!! put colors this place !!!!!!!!
var colors = ['#f8fae5', '#e69e91', '#a1c8e6', '#f5e862', '#94bf41', '#2d3a80', '#476eb3'];
var colorsThreading = colors;
var colorsTreadling = colors;
var stepThreading = false;
var stepTreadling = false;

if (params.colorsThreading) colorsThreading = setColorsFromParams(params.colorsThreading);
if (params.colorsTreadling) colorsTreadling = setColorsFromParams(params.colorsTreadling);
if (params.stepThreading) stepThreading = yesNoToBoolean(params.stepThreading);
if (params.stepTreadling) stepTreadling = yesNoToBoolean(params.stepTreadling);

var weave = document.getElementById('weave');

var treadlingColors = [];
for (var i = 0; i < weaveSize; i++) {
  var {color, colorSet} = getColor(colorsTreadling);
  treadlingColors.push(color);
};

for (var i = 0; i < weaveSize; i++) {
  if (colorsThreading.length === 0) {
    if (params.colorsThreading) colorsThreading = setColorsFromParams(params.colorsThreading);
    else colorsThreading = colors;
  }

  var {color, colorSet} = getColor(colorsThreading, stepThreading);
  var threadingColor = color;
  colorsThreading = colorSet;

  var col = document.createElement("DIV");
  col.className = "column";

  for (var ii = 0; ii < weaveSize; ii++) {
    var elem = document.createElement("DIV");

    elem.className = getBoolean() ? 'threadingElem' : 'treadlingElem';

    var elemColor;

    if (elem.className === 'threadingElem') elemColor = threadingColor;
    else elemColor = treadlingColors[ii];

    elem.style.backgroundColor = elemColor;
    elem.title = elemColor;

    col.appendChild(elem);
  }

  weave.appendChild(col);
}
