'use strict';

var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');
var setupSave = setup.querySelector('.setup-submit');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireBall = document.querySelector('.setup-fireball-wrap');
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var nameField = document.querySelector('.setup-user-name');

var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

// Получение случайного элемента из массива
var getRandomElement = function (array) {

  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];

};

var buttonAtributes = function (button) {
  button.setAttribute('role', 'button');
  button.setAttribute('aria-pressed', 'false');
  button.setAttribute('tabindex', '0');
};

// ARIA
setup.setAttribute('role', 'dialog');

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY;
};

var showSetupElement = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', function (event) {
    if (event.keyCode === ESCAPE_KEY) {
      setup.classList.add('invisible');
      setup.setAttribute('aria-hidden', true);
    }
  });
  setupOpen.setAttribute('aria-pressed', true);
};

var hideSetupElement = function () {
  setup.classList.add('invisible');
  setup.setAttribute('aria-hidden', true);
  document.addEventListener('keydown', function (event) {
    if (event.keyCode === ESCAPE_KEY) {
      setup.classList.add('invisible');
      setup.setAttribute('aria-hidden', true);
    }
  });
  setupOpen.setAttribute('aria-pressed', false);
};

// присваиваем атрибуты кнопкам открытия и закрытия окна
buttonAtributes(setupOpen);
buttonAtributes(setupClose);
buttonAtributes(setupSave);

// открытие/закрытие окна персонажа
// открытие по клику на мышь
setupOpen.addEventListener('click', function () {
  showSetupElement();
});

// закрытие по клику на мышь
setupClose.addEventListener('click', function () {
  hideSetupElement();
});

// открытие по нажатию на клавишу
setupOpen.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    showSetupElement();
  }
});

// закрытие по нажатию на клавишу
setupClose.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    hideSetupElement();
  }
});

setupSave.addEventListener('click', function () {
  hideSetupElement();
});

setupSave.addEventListener('keydown', function () {
  if (isActivateEvent(event)) {
    hideSetupElement();
  }
});

// меняем цвет куртки поочередно
wizardCoat.addEventListener('click', function () {

  var currentColor;

  for (var i = 0; i < wizardCoatColors.length; i++) {
    if (wizardCoatColors[i] === wizardCoat.style.fill) {
      currentColor = i;
    }
  }

  if (currentColor === wizardCoatColors.length - 1) {
    wizardCoat.style.fill = wizardCoatColors[0]; // если они равны то присваем куртке следующий цвет, если индекс будет равен последнему эл-ту, то присвоим первый
  } else {
    wizardCoat.style.fill = wizardCoatColors[currentColor + 1];
  }

});

// меняем цвет глаз
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElement(wizardEyesColors);
});

// меняем цвет фаербола
fireBall.addEventListener('click', function () {
  fireBall.style.background = getRandomElement(fireBallColors);
});

// валидация формы ввода имени
nameField.required = true;
nameField.maxLength = 50;
