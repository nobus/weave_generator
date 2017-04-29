
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

function yesNoToBoolean(n) {
  if (n === 'yes') return true;
  else if (n === 'no') return false;
  else return false;
}

function getColor(clr, step) {
  if (step) {
      var index = getRandomInt(0, clr.length);
      var ret = clr[index];

      clr = clr.filter((e, i) => {return (i != index) ? e : undefined});

      return {'color': ret, 'colorSet': clr};
  } else {
    return {'color': clr[getRandomInt(0, clr.length)], 'colorSet': clr};
  }
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

function createSateenRepeat(repeatSize, shift) {
  var repeat = [];

  if (repeatSize >= 5 && shift > 1 && shift < (repeatSize - 1)) {
    var th = 0;

    for (var i = 0; i < repeatSize; i++) {
      repeat.push([]);
      for (var ii = 0; ii < repeatSize; ii++) {
        if (ii === th) repeat[i].push(1);
        else repeat[i].push(0);
      }

      //calculate next th
      th = th + shift;
      if (th >= repeatSize) th = th - repeatSize;
    }

    return repeat;

  } else {
    window.alert(`Something wrong. I can't create repeat for sateen. Check your parameters, please.`);
    return undefined;
  }
}

function parseTwillFormula(params) {
  // for example: 2-3,1-4,1-3 => [[2,3], [1,4], [1,3]]
  return params.split(',').map(a=>{return a.split('-')})
}

function createTwillRepeat(formula) {
  var repeat = [];

  return repeat;
}
