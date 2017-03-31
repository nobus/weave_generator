
var params = paramsParser();

var weaveSize = 100;

// !!!!!!!! put colors this place !!!!!!!!
var colors = ['#f8fae5', '#e69e91', '#a1c8e6', '#f5e862', '#94bf41', '#2d3a80', '#476eb3'];
var colorsThreading = colors;
var colorsTreadling = colors;
var stepThreading = false;
var stepTreadling = false;
var randomColors = true;
var weaveType = 'random';
var sateenRepeat = 5;
var sateenShift = 3;

if (params.colorsThreading) colorsThreading = setColorsFromParams(params.colorsThreading);
if (params.colorsTreadling) colorsTreadling = setColorsFromParams(params.colorsTreadling);
if (params.stepThreading) stepThreading = yesNoToBoolean(params.stepThreading);
if (params.stepTreadling) stepTreadling = yesNoToBoolean(params.stepTreadling);
if (params.randomColors) randomColors = yesNoToBoolean(params.randomColors);
if (params.weaveType) weaveType = params.weaveType;
if (params.sateenRepeat) sateenRepeat = parseInt(params.sateenRepeat);
if (params.sateenShift) sateenShift = parseInt(params.sateenShift);

var weave = document.getElementById('weave');

var treadlingColors = [];
for (var i = 0; i < weaveSize; i++) {
  if (randomColors) var {color, colorSet} = getColor(colorsTreadling);
  else var color = colorsTreadling[i % colorsTreadling.length];

  treadlingColors.push(color);
};

if (weaveType === 'sateen')
  var sateenRepeatTemplate = createSateenRepeat(sateenRepeat, sateenShift);

for (var i = 0; i < weaveSize; i++) {
  if (colorsThreading.length === 0) {
    if (params.colorsThreading) colorsThreading = setColorsFromParams(params.colorsThreading);
    else colorsThreading = colors;
  }

  if (randomColors) {
    var {color, colorSet} = getColor(colorsThreading, stepThreading);
    var threadingColor = color;
    colorsThreading = colorSet;
  } else {
    threadingColor = colorsThreading[i % colorsThreading.length];
  }

  var col = document.createElement("DIV");
  col.className = "column";

  for (var ii = 0; ii < weaveSize; ii++) {
    var elem = document.createElement("DIV");

    if (weaveType === 'random')
      elem.className = getBoolean() ? 'threadingElem' : 'treadlingElem';
    else if (weaveType === 'plain')
      elem.className = (ii+i) % 2 ? 'threadingElem' : 'treadlingElem';
    else if (weaveType === 'sateen' && sateenRepeatTemplate)
      elem.className = sateenRepeatTemplate[i%sateenRepeat][ii%sateenRepeat]
        ? 'threadingElem'
        : 'treadlingElem';

    var elemColor;

    if (elem.className === 'threadingElem') elemColor = threadingColor;
    else elemColor = treadlingColors[ii];

    elem.style.backgroundColor = elemColor;
    elem.title = elemColor;

    col.appendChild(elem);
  }

  weave.appendChild(col);
}
