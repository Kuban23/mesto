const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input'); // потом нужно взять коллекцию

// Отменяем стандартное поведение, отправку формы
formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});


// Слушатель события Input
formInput.addEventListener('input', function (evt) {
  console.log(evt.target.validity.valid);
});


// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('popup__input_type_error');
};


// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
};


// Функция, которая проверяет валидность Input
const isValid = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput);
  }
  else {
    hideInputError(formInput);
  }
};


// Вызываем функцию isValid при каждом нажатии клавиши в поле Input
formInput.addEventListener('input', isValid);

