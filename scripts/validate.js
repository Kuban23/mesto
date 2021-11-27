// Добавление обработчиков всем Инпутам
const setEventListeners = (formElement) => {
  // Находим все Инпуты и помещаем их в массив
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

  // Перебераем массив с коллекцией и добавим каждому Инпуту обработчик
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
    });
  });
};


// Добавление обработчиков всем Формам
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    // Для каждой формы вызываем функцию setEventListeners для добавления обработчиков
    setEventListeners(formElement);
  });
};

enableValidation();



// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMassage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // находим элемент ошибки
  inputElement.classList.add('popup__input_type_error');
  // Показываем сообщение об ошибке
  errorElement.classList.add('popup__input-error');
  errorElement.textContent = errorMassage;
};


// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // находим элемент ошибки
  inputElement.classList.remove('popup__input_type_error');
  // Убираем сообщение об ошибке
  errorElement.classList.remove('popup__input-error');
  errorElement.textContent = '';
};


// Функция, которая проверяет валидность Input, принимает элементы формы и инпута ввиде аргумента
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Функция showInputError принимает параметром форму в которой находится проверяемое поле и само это поле.
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    // Функция hideInputError принимает параметром форму в которой находится проверяемое поле и само это поле.
    hideInputError(formElement, inputElement);
  }
};







