console.log('Hello, World!') 
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../parts/initialCards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

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
  //openPopup,
  //closePopup,
  //submitFormHandler,
  objForm,
  profileName,
  profileProfession,
  popupInputTypeName,
  popupInputTypeProfession,
} from '../parts/constants.js';

// Popup с картинкой
const openPopupWithImage = new PopupWithImage('.popup_type_image');

// Данные о пользователе
const profileUserInfo = new UserInfo(
  {
    nameSelector: '.profile__name',
    professionSelector: '.profile__profession'
  }
);


// Функция для создания карточки

// -----------------------------------------------------------------------------------
// function createCard(cardInfo) {
//   const card = new Card(cardInfo, '.photo-template');
//   const cardElement = card.generateCard();
//   photoContainer.prepend(cardElement);
// }

//Перебираем массив и добавляем карточку
// initialCards.forEach((item) => {
//   createCard(item);
// });


//Добавляем картинку на страницу
// const defaultCardList = new Section({
//   items: initialCards, renderer: (cardItem) => {
//     const card = new Card(cardItem, '.photo-template');
//     const cardElement = card.generateCard();
//     defaultCardList.addItem(cardElement);
//   }
// }, photoContainer);

// Отрисовываем все элементы
// defaultCardList.renderItems();
// -----------------------------------------------------------------------------------
// const createCard = ({ link, name }, selector,
//   handleCardClick = (link, name) => {
//     openPopupWithImage.open(link, name);
//   }) => {
//   const card = new Card({ link, name }, selector, handleCardClick)
//   return card.generateCard();
// };


function createCard(cardItem) {
  const card = new Card({
    data: cardItem,
    handleCardClick: () => {
      openPopupWithImage.open(cardItem.link, cardItem.name);
    }
  }, '.photo-template');

  return card.generateCard();
}


// Добавляем картинки на страницу

// const defaultCardList = new Section(
//   {
//     items: initialCards, renderer: (cardItem) => {
//       const defaultCard = createCard(cardItem, '.photo-template');
//       defaultCardList.addItem(defaultCard);
//     }
//   }, photoContainer
// );

// // отрисовываем все элементы
// defaultCardList.renderItems();

const сardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      сardList.addItem(createCard(cardItem));
    }
  }, photoContainer
);
// отрисовываем все элементы
сardList.renderItems();




// Создаем карточки ч/з popup

// const openPopupAddImage = new PopupWithForm({
//   selectorPopup: '.popup_type_addImage',
//   handleFormSubmit: (cardItem) => {
//     const newImage = createCard(cardItem);
//     сardList.addItem(newImage);
//     openPopupAddImage.close();
//   }
// });

const openPopupAddImage = new PopupWithForm({
  selectorPopup: '.popup_type_addImage',
  handleFormSubmit: () => {
    const cardInfo = {
          name: popupInputaddImageTitle.value,
          link: popupInputaddImageLink.value
        };
    const newImage = createCard(cardInfo);
    сardList.addItem(newImage);
    openPopupAddImage.close();
  }
});


// function createObjectHandler(evt) {
//   evt.preventDefault();
//   // Создали объект который получает данные из Input добавления карточки
//   const cardInfo = {
//     name: popupInputaddImageTitle.value,
//     link: popupInputaddImageLink.value
//   };
//   createCard(cardInfo);
//   closePopup(popupAddImage);
// };


// function createObjectHandler(evt) {
//   evt.preventDefault();
//   //Создали объект который получает данные из Input добавления карточки
//   const cardInfo = {
//     name: popupInputaddImageTitle.value,
//     link: popupInputaddImageLink.value
//   };
//   createCard(cardInfo);
//   //closePopup(popupAddImage);
//   openPopupAddImage.close();
// };


// Popup редактируем профиль

// const openPopupProfile = new PopupWithForm(
//   '.popup_type_profile',
//   ({ name, profession }) => {
//     profileUserInfo.setUserInfo({ name, profession });
//     openPopupProfile.close();
//   }
// );

const openPopupProfile = new PopupWithForm({
  selectorPopup: '.popup_type_profile',
  handleFormSubmit: ({ name, profession }) => {
    profileUserInfo.setUserInfo({ name, profession })
    profileName.textContent = popupInputTypeName.value;
    profileProfession.textContent = popupInputTypeProfession.value;
    openPopupProfile.close();
  }
});




// Функция отправки формы (пока форму никуда не отправляем)
// function submitFormHandler(evt) {
//   evt.preventDefault();
//   // Вставляем новые значения в поля профиля имя и профессия
//   profileName.textContent = popupInputTypeName.value;
//   profileProfession.textContent = popupInputTypeProfession.value;
//   openPopupProfile.close();
// }

// function createCard() {
//   handleCardClick = (link, name) => {
//     openPopupWithImage.open(link, name);
//   }
// }





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



//  Создаем слушателей для кнопок

// Открываем popup profile
editBtnProfile.addEventListener('click', () => {
  // openPopup(popupProfile);
  //initEditForm();
  openPopupProfile.open();
  //Получаем объект с данными
  const getUserInfo = profileUserInfo.getUserInfo();
  popupInputTypeName.value = getUserInfo.name;
  popupInputTypeProfession.value = getUserInfo.profession;
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
// profileForm.addEventListener('submit', submitFormHandler);

// Кпнопка добавления карточки
// addImageForm.addEventListener('submit', createObjectHandler);


initEditForm();

// Включаем валидацию popup профиля
const profFormValidator = new FormValidator(objForm, profileForm);
profFormValidator.enableValidation();

// Включаем валидацию popup добавление карточки
const imageFormValidator = new FormValidator(objForm, addImageForm);
imageFormValidator.enableValidation();





openPopupWithImage.setEventListeners();
openPopupProfile.setEventListeners();
openPopupAddImage.setEventListeners();

