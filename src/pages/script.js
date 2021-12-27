import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../parts/initialCards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
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
  objForm,
  profileName,
  profileProfession,
  popupInputTypeName,
  popupInputTypeProfession
} from '../parts/constants.js';

// открываем popup
const openPopupWithImage = new PopupWithImage('.popup_type_image');


// Функция для создания карточки
const createCard = (cardItem, selector,
  handleCardClick = (link, name) => {
    openPopupWithImage.open(link, name);
  }) => {
  const card = new Card(cardItem, selector, handleCardClick)
  return card.generateCard();
};

// Добавляем картинки на страницу
const defaultCardList = new Section(
  {
    items: initialCards, renderer: (cardItem) => {
      const defaultCard = createCard(cardItem, '.photo-template');
      defaultCardList.addItem(defaultCard);
    }
  }, photoContainer
);

// отрисовываем все элементы
defaultCardList.renderItems();

// Создаем карточки ч/з popup
const openPopupAddImage = new PopupWithForm(
  '.popup_type_addImage',
  (cardItem) => {
    const newImage = createCard(cardItem, '.photo-template');
    defaultCardList.addItem(newImage);
    openPopupAddImage.close();
  }
);

// Редактируем профиль, присваиваем инпутам данные полученные из инпутов
const openPopupProfile = new PopupWithForm(
  '.popup_type_profile',
  (evt) => {
    evt.preventDefault();
    profileName.textContent = popupInputTypeName.value;
    profileProfession.textContent = popupInputTypeProfession.value;
    openPopupProfile.close();
  }
);


// function createCard() {
//   handleCardClick = (link, name) => {
//     openPopupWithImage.open(link, name);
//   }
// }


// function createCard(cardInfo) {
//   const card = new Card(cardInfo, '.photo-template');
//   const cardElement = card.generateCard();
//   photoContainer.prepend(cardElement);
// }

// Перебираем массив и добавляем карточку
// initialCards.forEach((item) => {
//   createCard(item);
// });

// Функция для создания карточки ч/з popup
// function createObjectHandler(evt) {
//   evt.preventDefault();
//   const openPopupAddImage = new PopupWithForm({
//     selectorPopup: '.popup_type_addImage',
//     handleFormSubmit: (cardInfo) => {
//       const newImage = createCard(cardInfo, '.photo-template');
//       defaultCardList.prepend(newImage);
//       openPopupAddImage.close();
//     }
//   })

// };


function createObjectHandler(evt) {
  // openPopupWithImage.setEventListeners();
  // evt.preventDefault();
  // Создали объект который получает данные из Input добавления карточки
  const cardInfo = {
    name: popupInputaddImageTitle.value,
    link: popupInputaddImageLink.value
  };
  createCard(cardInfo);
  closePopup(popupAddImage);
};

//  Создаем слушателей для кнопок

// Открываем popup profile
editBtnProfile.addEventListener('click', function () {
  // openPopup(popupProfile);
  openPopupProfile.open();
});

// Открываем popup для добавления картинок
addBtnProfile.addEventListener('click', function () {
  // openPopup(popupAddImage);
  // // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  // imageFormValidator.resetValidation();

  openPopupAddImage.open();
  // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  imageFormValidator.resetValidation();

});

// Кпнопка сохранения popup profile (отправка формы)
profileForm.addEventListener('submit', submitFormHandler);

// Кпнопка добавления карточки
addImageForm.addEventListener('submit', createObjectHandler);

//
initEditForm();

// Включаем валидацию popup профиля
const profFormValidator = new FormValidator(objForm, profileForm);
profFormValidator.enableValidation();

// Включаем валидацию popup добавление карточки
const imageFormValidator = new FormValidator(objForm, addImageForm);
imageFormValidator.enableValidation();

// Добавляем картинку на страницу
// const defaultCardList = new Section({
//   items: initialCards, renderer: (cardItem) => {
//     const card = new Card(cardItem, '.photo-template');
//     const cardElement = card.generateCard();
//     defaultCardList.addItem(cardElement);
//   }
// }, photoContainer);

// // отрисовываем все элементы
// defaultCardList.renderItems();



//
// const profileUserInfo = new UserInfo(
//   {
//     nameSelector: '.profile__name',
//     professionSelector: '.profile__profession"'
//   }
// );

openPopupWithImage.setEventListeners();
openPopupProfile.setEventListeners();

