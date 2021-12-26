import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../parts/initialCards.js';
import Section from '../components/Section.js';
import {
  editBtnProfile,
  profileForm,
  addBtnProfile,
  addBtnCard,
  popupProfile,
  popupAddImage,
  popupInputaddImageTitle,
  popupInputaddImageLink,
  photoContainer,
  addImageForm,
  initEditForm,
  openPopup,
  closePopup,
  submitFormHandler,
  objForm
} from '../parts/constants.js';

// // Функция для создания карточки
// function createCard(cardInfo) {
//   const card = new Card(cardInfo, '.photo-template');
//   const cardElement = card.generateCard();
//   photoContainer.prepend(cardElement);
// }

// // Перебираем массив и добавляем карточку
// initialCards.forEach((item) => {
//   createCard(item);
// });

// Функция для создания карточки ч/з popup
function createObjectHandler(evt) {
  evt.preventDefault();
  // Создали объект который получает данные из Input добавления карточки
  const cardInfo = {
    name: popupInputaddImageTitle.value,
    link: popupInputaddImageLink.value
  };
  createCard(cardInfo);
  closePopup(popupAddImage);
};

//  Создаем слушателя для кнопок
editBtnProfile.addEventListener('click', function () {      // Открываем popup profile
  openPopup(popupProfile);
});

addBtnProfile.addEventListener('click', function () {  // Открываем popup для добавления картинок
  openPopup(popupAddImage);
  // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  imageFormValidator.resetValidation();
});

profileForm.addEventListener('submit', submitFormHandler); // Кпнопка сохранения popup profile (отправка формы)

addImageForm.addEventListener('submit', createObjectHandler); // Кпнопка добавления карточки

//
initEditForm();

// Включаем валидацию popup профиля
const profFormValidator = new FormValidator(objForm, profileForm);
profFormValidator.enableValidation();

// Включаем валидацию popup добавление карточки
const imageFormValidator = new FormValidator(objForm, addImageForm);
imageFormValidator.enableValidation();

const defaultCardList = new Section({
  items: initialCards, renderer: (cardItem) => {
    const card = new Card(cardItem, '.photo-template');
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, photoContainer);

defaultCardList.renderItems();
