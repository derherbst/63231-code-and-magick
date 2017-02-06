'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');
var nameField = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireBall = document.querySelector('.setup-fireball-wrap');
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Получение случайного элемента из массива
var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};

setupOpen.addEventListener('click', function () {

  setup.classList.remove('invisible');

});

setupClose.addEventListener('click', function () {

  setup.classList.add('invisible');

});

wizardCoat.addEventListener('click', function () {

//  for (i = 0; i < wizardCoatColors.length; i++) {
//    return wizardCoatColors[i];
//  }

//  var colorNumber = wizardCoatColors.forEach(function (i) {
//    return i;
//  });
//
//  wizardCoat.style.fill = wizardCoatColors[i];
//  var coatColorNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = getRandomElement(wizardCoatColors);

});

wizardEyes.addEventListener('click', function () {

  wizardEyes.style.fill = getRandomElement(wizardEyesColors);

});

fireBall.addEventListener('click', function () {

  fireBall.style.background = getRandomElement(fireBallColors);

});
