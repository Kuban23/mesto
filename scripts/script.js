import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import {
  editBtnProfile,
  profileForm,
  addBtnProfile,
  addBtnCard,
  popupProfile,
  popupAddImage,
  // popupImageViewing,
  // popupInputTypeName,
  // popupInputTypeProfession,
  popupInputaddImageTitle,
  popupInputaddImageLink,
  // profileName,
  // profileProfession,
  photoContainer,
  addImageForm,
  // popupList,
  initEditForm,
  // closeByEscape,
  openPopup,
  closePopup,
  submitFormHandler,
  objForm
} from './parts.js';

// Перебираем массив и добавляем карточку
initialCards.forEach((item) => {
  createCard(item);
});

// Функция для создания карточки
function createCard(cardInfo) {
  const card = new Card(cardInfo, '.photo-template');
  const cardElement = card.generateCard();
  photoContainer.prepend(cardElement);
}

// Функция для создания карточки ч/з popup
function createObjectHandler(evt) {
  evt.preventDefault();
  // Создали объект который получает данные из Input добавления карточки
  const cardInfo = {
    name: popupInputaddImageTitle.value,
    link: popupInputaddImageLink.value
  };

  createCard(cardInfo);
  popupInputaddImageTitle.value = '';
  popupInputaddImageLink.value = '';

  addBtnCard.disabled = true;
  addBtnCard.classList.add('popup__submit-button_inactive');
  closePopup(popupAddImage);
};

//  Создаем слушателя для кнопок
editBtnProfile.addEventListener('click', function () {      // Открываем popup profile
  openPopup(popupProfile);
});

addBtnProfile.addEventListener('click', function () {  // Открываем popup для добавления картинок
  openPopup(popupAddImage);
});

profileForm.addEventListener('submit', submitFormHandler); // Кпнопка сохранения popup profile (отправка формы)

addImageForm.addEventListener('submit', createObjectHandler); // Кпнопка добавления карточки

initEditForm();

// Включаем валидацию popup профиля
const profFormValidator = new FormValidator(objForm, profileForm);
profFormValidator.enableValidation();

// Включаем валидацию popup добавление карточки
const imageFormValidator = new FormValidator(objForm, addImageForm);
imageFormValidator.enableValidation();
