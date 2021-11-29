
// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMassage, { errorClass, inputErrorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // находим элемент ошибки
  inputElement.classList.add(inputErrorClass);
  // Показываем сообщение об ошибке
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMassage;
};


// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorClass, } = config;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // находим элемент ошибки
  inputElement.classList.remove(inputErrorClass);
  // Убираем сообщение об ошибке
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};


// Функция, которая проверяет валидность Input, принимает элементы формы и инпута ввиде аргумента
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    // Функция showInputError принимает параметром форму в которой находится проверяемое поле и само это поле.
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  }
  else {
    // Функция hideInputError принимает параметром форму в которой находится проверяемое поле и само это поле.
    hideInputError(formElement, inputElement, config);
  }
};


// Функция вкл/откл кнопки 'Отправить'
const toggleButtonState = (formElement, buttonElement, inactiveButtonClass) => {
  // Проверяем валидность формы
  const isFormValid = formElement.checkValidity();
  // Если форма невалидна, то присваиваем свойству disabled кнопки значение true
  buttonElement.disabled = !isFormValid;
  // Если форма невалидна, добавляем кнопке класс
  buttonElement.classList.toggle(inactiveButtonClass, !isFormValid)
};


// Добавление обработчиков всем Инпутам
const setEventListeners = (formElement, config) => {
  // разбиваем конфиг на составляющие, чтобы передать нужные свойства в функции
  const { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = config;
  // Находим все Инпуты и помещаем их в массив
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  const buttonElement = formElement.querySelector(submitButtonSelector);

  // Вызываем функцию чтобы при открытии popup кнопка была не активной
  toggleButtonState(formElement, buttonElement, inactiveButtonClass);

  // Перебираем массив с коллекцией и добавим каждому Инпуту обработчик
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, { errorClass, inputErrorClass });

      toggleButtonState(formElement, buttonElement, inactiveButtonClass);
    });
  });

};

// Добавление обработчиков всем Формам
const enableValidation = (config) => {
  // Берем данные из конфига
  const { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    // Для каждой формы вызываем функцию setEventListeners для добавления обработчиков
    setEventListeners(formElement, config);
  });
};

initEditForm();

// Включаем валидацию вызовом функции enableValidation
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
})









