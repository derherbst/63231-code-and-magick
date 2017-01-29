'use strict'

window.renderStatistics = function (ctx, names, times) {
  var canvas = document.querySelector('canvas');
  var defineCtx = canvas.getContext('2d');
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  
  
  var histHeight = 150;
  var colWidth = 40;
  var colBetween = 50px;
  
  var max = 0;
  var min = Infinity;
  
  for(var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      
    }
  }
};

renderStatistics(defineCtx, ['Олег', 'Саша', 'Юля', 'Вадим', 'Вы'], )
