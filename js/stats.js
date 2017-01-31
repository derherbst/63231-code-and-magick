'use strict';

var namesArray = ['Вы', 'Олег', 'Саша', 'Юля'];
var timesArray = [500, 235, 345, 400];

window.renderStatistics = function (ctx, names, times) {

  var histHeight = 150;
  var histX = 150;
  var colWidth = 40;
  var colBetween = 50;
  var mineColor = 'rgba(255, 0, 0, 1)';

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  for (var i = 0; i < timesArray.length; i++) {

    var max = 0;
    var min = Infinity;

    if (times[i] > max) {
      max = times[i];
    }

    if (times[i] < min) {
      min = times[i];
    }

    var step = histHeight / max;
    var colHeight = step * times[i];

    if (namesArray[i] === 'Вы') {
      ctx.fillStyle = mineColor;
    } else {
      ctx.fillStyle = ['rgb(0, 0, ' + Math.round(80 + Math.random() * (255 - 80)) + ')'];
    }

    ctx.fillRect(histX + colBetween * i, 100 + histHeight - colHeight, colWidth, colHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(namesArray[i], histX + colBetween * i, 100 + histHeight);
  }
};

// var canvas = document.querySelector('canvas');
//  renderStatistics(canvas.getContext('2d'), namesArray, timesArray);
