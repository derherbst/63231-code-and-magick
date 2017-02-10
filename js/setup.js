'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireBall = document.querySelector('.setup-fireball-wrap');
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var nameField = document.querySelector('.setup-user-name');

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

  var currentColor;

  for (var i = 0; i < wizardCoatColors.length; i++) {
    if (wizardCoatColors[i] == wizardCoat.style.fill) {
      currentColor = i;
    }
  }

  if (currentColor == wizardCoatColors.length - 1) {
    wizardCoat.style.fill = wizardCoatColors[0]; // если они равны то присваем куртке следующий цвет, если индекс будет равен последнему эл-ту, то присвоим первый
  } else {
    wizardCoat.style.fill = wizardCoatColors[currentColor + 1];
  }

});

wizardEyes.addEventListener('click', function () {

  wizardEyes.style.fill = getRandomElement(wizardEyesColors);

});

fireBall.addEventListener('click', function () {

  fireBall.style.background = getRandomElement(fireBallColors);

});

nameField.required = true;
nameField.maxLength = 50;
