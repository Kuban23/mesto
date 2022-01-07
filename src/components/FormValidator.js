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
    this._buttonElement = this._element.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
  }

  // Запускаем валидацию
  enableValidation() {
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // Для каждой формы вызываем функцию setEventListeners для добавления обработчиков
    this._setEventListeners();
  }

  // Добавление обработчиков всем Инпутам
  _setEventListeners() {
    // Вызываем функцию чтобы при открытии popup кнопка была не активной
    this._toggleButtonState();
    // Перебираем массив с коллекцией и добавим каждому Инпуту обработчик
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        // проверка состояния кнопки в момент изменения полей
        this._toggleButtonState();
      });
    });
  };

  // Функция, которая проверяет валидность Input
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
    else {
      this._hideInputError(inputElement);
    }
  };

  // Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement) {
    const errorElement = this._element.querySelector(`.${inputElement.id}-error`); // находим элемент ошибки
    inputElement.classList.add(this._inputErrorClass);
    // Показываем сообщение об ошибке
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
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

  // Функция вкл/откл кнопки 'Отправить'
  _toggleButtonState() {
    // const buttonElement = this._element.querySelector(this._submitButtonSelector);
    // Проверяем валидность формы
    const isFormValid = this._element.checkValidity();
    // Если форма невалидна, то присваиваем свойству disabled кнопки значение true
    this._buttonElement.disabled = !isFormValid;
    // Если форма невалидна, добавляем кнопке класс
    this._buttonElement.classList.toggle(this._inactiveButtonClass, !isFormValid)
  };

  // Валидация кнопки в profile
  enableSubmitButton() {
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  }

  // Функция очистки инпутов формы в случае если форму не заполнили до конца.
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      this._toggleButtonState();
      this._element.reset();
    });

  }

};

