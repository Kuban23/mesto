export class FormValidator {
  constructor(
    { formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass, },
    form) {
    this._element = form;
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  // Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement) {
    const errorElement = this._element.querySelector(`.${inputElement.id}-error`); // находим элемент ошибки
    inputElement.classList.add(this._inputErrorClass);
    // Показываем сообщение об ошибке
    errorElement.classList.add(this._errorClass);
    // errorElement.textContent = errorMassage; // не знаю
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError(inputElement) {
    //const { inputErrorClass, errorClass, } = config; // не знаю
    const errorElement = this._element.querySelector(`.${inputElement.id}-error`); // находим элемент ошибки
    inputElement.classList.remove(this._inputErrorClass);
    // Убираем сообщение об ошибке
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  // Функция, которая проверяет валидность Input
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    }
    else {
      this._hideInputError(inputElement);
    }
  };

  // Функция вкл/откл кнопки 'Отправить'
  _toggleButtonState() {
    const buttonElement = this._element.querySelector(this._submitButtonSelector);
    // Проверяем валидность формы
    const isFormValid = this._element.checkValidity();
    // Если форма невалидна, то присваиваем свойству disabled кнопки значение true
    buttonElement.disabled = !isFormValid;
    // Если форма невалидна, добавляем кнопке класс
    buttonElement.classList.toggle(this._inactiveButtonClass, !isFormValid)
  };

  // Добавление обработчиков всем Инпутам
  _setEventListeners() {
    // разбиваем конфиг на составляющие, чтобы передать нужные свойства в функции
    // не знаю const { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = config;

    // Находим все Инпуты и помещаем их в массив
    const inputList = Array.from(this._element.querySelectorAll(this._inputSelector));

    // Вызываем функцию чтобы при открытии popup кнопка была не активной
    this._toggleButtonState();

    // Перебираем массив с коллекцией и добавим каждому Инпуту обработчик
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        this._isValid(inputElement);

        this._toggleButtonState();
      });
    });

  };

  // Добавление обработчиков всем Формам
  enableValidation() {
    // Берем данные из конфига
    // не знаю const { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = config;
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });

      // Для каждой формы вызываем функцию setEventListeners для добавления обработчиков
      this._setEventListeners();
    });
  };




};

